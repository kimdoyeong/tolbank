import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import * as path from "path";
import App from "./App";
import { StaticRouter } from "react-router-dom";
import reducer, { rootSaga } from "./store/reducer";
import createSagaMiddleware, { END } from "redux-saga";
import PreloadContext from "./lib/PreloadContext";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
const statsFile = path.resolve("./build/loadable-stats.json");

function createPage(root, tags) {
  return `<!DOCTYPE HTML>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            ${tags.styles}
            ${tags.links}
        </head>
        <body>
            <div id="root">
                ${root}
            </div>
            ${tags.scripts}
        </body>
    </html>`;
}

const app = express();

const serverRender = async (req, res, next) => {
  const context = {};
  const extractor = new ChunkExtractor({ statsFile });
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();
  const preloadContext = {
    done: false,
    promises: []
  };

  const jsx = (
    <ChunkExtractorManager extractor={extractor}>
      <PreloadContext.Provider value={preloadContext}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      </PreloadContext.Provider>
    </ChunkExtractorManager>
  );
  ReactDOMServer.renderToStaticMarkup(jsx);
  store.dispatch(END);
  try {
    await sagaPromise;
    await Promise.all(preloadContext.promises);
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx);
  const stateString = JSON.stringify(store.getState()).replace(/</g, "\\u003c");
  const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`;

  const tags = {
    scripts: stateScript + extractor.getScriptTags(),
    links: extractor.getLinkTags(),
    styles: extractor.getStyleTags()
  };

  res.send(createPage(root, tags));
};

const serve = express.static(path.resolve("./build"), {
  index: false
});

app.use(serve);
app.use(serverRender);

app.listen(8080, () => {
  console.log(`Runnig on localhost:8080`);
});

import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import * as path from "path";
import App from "./App";
import { StaticRouter } from "react-router-dom";

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

  const jsx = (
    <ChunkExtractorManager extractor={extractor}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ChunkExtractorManager>
  );

  const root = ReactDOMServer.renderToString(jsx);

  const tags = {
    scripts: extractor.getScriptTags(),
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

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer, { rootSaga } from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;

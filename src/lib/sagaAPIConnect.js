import { put, call } from "redux-saga/effects";
function sagaAPIConnect(action, func, ...args) {
  return function*() {
    try {
      const res = yield call(func, ...args);
      put({ type: action + "_SUCCESS", payload: res });
    } catch (e) {
      put({ type: action + "_FAIL", payload: e });
    }
  };
}
export default sagaAPIConnect;

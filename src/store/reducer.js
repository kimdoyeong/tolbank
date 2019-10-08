import { combineReducers } from "redux";
import signup, { signupSaga } from "./signup";
import auth, { authSaga } from "./auth";
import file, { fileSaga } from "./file";
import view, { viewSaga } from "./view";
import transmission, { transmissionSaga } from "./transmission";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([
    signupSaga(),
    authSaga(),
    fileSaga(),
    viewSaga(),
    transmissionSaga()
  ]);
}

export default combineReducers({
  signup,
  auth,
  file,
  view,
  transmission
});

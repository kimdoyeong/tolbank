import { combineReducers } from "redux";
import signup, { signupSaga } from "./signup";
import auth, { authSaga } from "./auth";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([signupSaga(), authSaga()]);
}

export default combineReducers({
  signup,
  auth
});

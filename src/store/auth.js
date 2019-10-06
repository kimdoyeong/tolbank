import { createAction, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { createToken } from "../lib/api/token";
import sagaFailHandler from "../lib/sagaFailHandler";
const SIGN_IN = "signin/SIGN_IN";
const SIGN_IN_SUCCESS = "signin/SIGN_IN_SUCCESS";
const SIGN_IN_FAIL = "signin/SIGN_IN_FAIL";
const SIGN_IN_LOGOUT = "signin/SIGN_IN_LOGOUT";
const SIGN_IN_LOGOUTED = "signin/SIGN_IN_LOGOUTED";

export const signIn = createAction(SIGN_IN);
export const logout = createAction(SIGN_IN_LOGOUT);

function* createTokenSaga(action) {
  try {
    const res = yield call(createToken, action.payload);
    window.localStorage && localStorage.setItem("token", res.data.token);
    window.localStorage &&
      localStorage.setItem("token_info", JSON.stringify(res.data.data));
    yield put({
      type: SIGN_IN_SUCCESS,
      token: res.data.token,
      data: res.data.data
    });
  } catch (e) {
    yield put({ type: SIGN_IN_FAIL, payload: e });
  }
}
function* logoutSaga() {
  window.localStorage && localStorage.removeItem("token");
  window.localStorage && localStorage.removeItem("token_info");
  yield put({ type: SIGN_IN_LOGOUTED });
}
export function* authSaga() {
  yield takeEvery(SIGN_IN, createTokenSaga);
  yield takeEvery(SIGN_IN_LOGOUT, logoutSaga);
}

const token = window.localStorage && localStorage.getItem("token");
const token_info = window.localStorage && localStorage.getItem("token_info");

const initialState = {
  success: !!token,
  token: token || null,
  error: null,
  data: token_info ? JSON.parse(token_info) : null
};
export default handleActions(
  {
    [SIGN_IN_SUCCESS]: (state, action) => {
      return {
        success: true,
        token: action.token,
        data: action.data
      };
    },
    [SIGN_IN_FAIL]: sagaFailHandler,
    [SIGN_IN_LOGOUTED]: () => {
      return {
        success: false,
        token: null,
        data: null,
        error: null
      };
    }
  },
  initialState
);

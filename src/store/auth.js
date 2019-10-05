import { createAction, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { createToken } from "../lib/api/token";
const SIGN_IN = "signin/SIGN_IN";
const SIGN_IN_SUCCESS = "signin/SIGN_IN_SUCCESS";
const SIGN_IN_FAIL = "signin/SIGN_IN_FAIL";

export const signIn = createAction(SIGN_IN);

function* createTokenSaga(action) {
  try {
    const res = yield call(createToken, action.payload);
    localStorage.setItem("token", res.data.token);
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
export function* authSaga() {
  yield takeEvery(SIGN_IN, createTokenSaga);
}

const token = localStorage.getItem("token");
const token_info = localStorage.getItem("token_info");

const initialState = {
  success: !!token,
  token: token || null,
  error: null,
  data: token_info ? JSON.parse(token_info) : null
};
export default handleActions(
  {
    [SIGN_IN_SUCCESS]: (state, action) => {
      console.log(action);
      return {
        success: true,
        token: action.token,
        data: action.data
      };
    },
    [SIGN_IN_FAIL]: (state, action) => {
      return {
        success: false,
        error: action.payload.response
          ? action.payload.response.data.message
          : action.payload.message
      };
    }
  },
  initialState
);

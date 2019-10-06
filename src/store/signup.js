import { createAction, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { createUser as createUserAPI } from "../lib/api/signup";
import sagaFailHandler from "../lib/sagaFailHandler";

const CREATE_USER = "signup/CREATE_USER";
const CREATE_USER_SUCCESS = "signup/CREATE_USER_SUCCESS";
const CREATE_USER_FAIL = "signup/CREATE_USER_FAIL";
const CREATE_USER_INIT = "signup/CREATE_USER_INIT";

export const createUser = createAction(CREATE_USER);
export const createUsetInit = createAction(CREATE_USER_INIT);
function* createUserSaga(action) {
  try {
    const response = yield call(createUserAPI, action.payload);
    yield put({ type: CREATE_USER_SUCCESS, payload: response });
  } catch (e) {
    yield put({ type: CREATE_USER_FAIL, payload: e });
  }
}

const initialState = {
  success: false,
  error: null
};

export function* signupSaga() {
  yield takeEvery(CREATE_USER, createUserSaga);
}

export default handleActions(
  {
    [CREATE_USER_SUCCESS]: () => {
      return {
        success: true
      };
    },
    [CREATE_USER_FAIL]: sagaFailHandler,
    [CREATE_USER_INIT]: () => {
      return initialState;
    }
  },
  initialState
);

import { createAction, handleActions } from "redux-actions";
import { put, call, takeEvery } from "redux-saga/effects";
import { viewFile, getFileData } from "../lib/api/file";
import sagaFailHandler from "../lib/sagaFailHandler";

const FILE_VIEW = "view/FILE_VIEW";

const FILE_VIEW_SUCCESS = "view/FILE_VIEW_SUCCESS";
const FILE_VIEW_FAIL = "view/FILE_VIEW_FAIL";

const FILE_GET_DATA = "view/FILE_GET_DATA";
const FILE_GET_DATA_SUCCESS = "view/FILE_GET_DATA_SUCCESS";

export const fileView = createAction(FILE_VIEW);
export const fileGetData = createAction(FILE_GET_DATA);

function* fileViewSaga({ payload }) {
  try {
    const res = yield call(viewFile, payload.path);
    yield put({ type: FILE_VIEW_SUCCESS, payload: res.data });
  } catch (e) {
    yield put({ type: FILE_VIEW_FAIL, payload: e });
  }
}
function* fileGetDataSaga({ payload }) {
  try {
    const res = yield call(getFileData, payload.token);
    yield put({ type: FILE_GET_DATA_SUCCESS, payload: res.data });
  } catch (e) {
    yield put({ type: FILE_VIEW_FAIL, payload: e });
  }
}

export function* viewSaga() {
  yield takeEvery(FILE_VIEW, fileViewSaga);
  yield takeEvery(FILE_GET_DATA, fileGetDataSaga);
}

const initialState = {
  success: false,
  error: null,
  token: null,
  data: null
};

export default handleActions(
  {
    [FILE_VIEW_SUCCESS]: (state, action) => {
      const { payload } = action;
      return {
        success: true,
        token: payload.token
      };
    },
    [FILE_GET_DATA_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        data: payload
      };
    },
    [FILE_VIEW_FAIL]: sagaFailHandler
  },
  initialState
);

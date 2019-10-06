import { createAction, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { searchFile } from "../lib/api/file";
import sagaFailHandler from "../lib/sagaFailHandler";

const FILE_SEARCH = "file/FILE_SEARCH";

const FILE_SEARCH_SUCCESS = "file/FILE_SEARCH_SUCCESS";
const FILE_SEARCH_FAIL = "file/FILE_SEARCH_FAIL";

export const fileSearch = createAction(FILE_SEARCH);

function* fileSearchSaga({ payload: path }) {
  try {
    const res = yield call(searchFile, path);
    yield put({ type: FILE_SEARCH_SUCCESS, path, payload: res.data });
  } catch (e) {
    yield put({ type: FILE_SEARCH_FAIL, payload: e });
  }
}

export function* fileSaga() {
  yield takeEvery(FILE_SEARCH, fileSearchSaga);
}

const initialState = {
  path: null,
  data: [],
  error: null
};

export default handleActions(
  {
    [FILE_SEARCH_SUCCESS]: (state, action) => {
      return {
        path: action.path,
        data: action.payload.data
      };
    },
    [FILE_SEARCH_FAIL]: sagaFailHandler
  },
  initialState
);

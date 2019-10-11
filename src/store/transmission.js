import { createAction, handleActions } from "redux-actions";
import { takeEvery } from "redux-saga/effects";
import sagaTypes from "../lib/sagaTypes";
import transmissionAPI from "../lib/api/transmission";
import sagaAPIConnect from "../lib/sagaAPIConnect";
import sagaFailHandler from "../lib/sagaFailHandler";

const [DATA, DATA_SUCCESS, DATA_FAIL] = sagaTypes("transmission/GET");

export const getTransmission = createAction(DATA);
const getSaga = sagaAPIConnect(DATA, transmissionAPI);

export function* transmissionSaga() {
  yield takeEvery(DATA, getSaga);
}

const initialState = {
  success: false,
  error: null,
  data: null
};

export default handleActions(
  {
    [DATA_SUCCESS]: (_, action) => {
      return {
        success: true,
        data: action.payload.data
      };
    },
    [DATA_FAIL]: sagaFailHandler
  },
  initialState
);

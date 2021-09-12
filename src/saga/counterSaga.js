import { put, takeEvery } from "redux-saga/effects";
import {
  ASYNC_DEC_COUNT,
  ASYNC_INC_COUNT,
  decCountCreator,
  incCountCreator,
} from "../store/cashReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* incrementWorker() {
  yield delay(1000);
  yield put(incCountCreator());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decCountCreator());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INC_COUNT, incrementWorker);
  yield takeEvery(ASYNC_DEC_COUNT, decrementWorker);
}

import { all } from "@redux-saga/core/effects";
import { sagaMiddleare } from "../store";
import { countWatcher } from "./counterSaga";
import { fetchUserWatcher } from "./userSaga";

export function* rootWatcher() {
  yield all([fetchUserWatcher(), countWatcher()]);
}

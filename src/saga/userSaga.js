import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  addCustomerAction,
  addCustomersAction,
  fetchCustomerAction,
  FETCH_CUSTOMERS,
} from "../store/customerReducer";

const fetchUsersFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users");
// console.log(2);
function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  console.log("users", json);
  yield put(addCustomersAction(json));
}

export function* fetchUserWatcher() {
  //   console.log(1);

  yield takeEvery(FETCH_CUSTOMERS, fetchUserWorker);
}

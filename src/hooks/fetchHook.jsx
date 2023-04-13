import { put, takeEvery, call } from "redux-saga/effects";
import { setProducts } from "../store/productsReducer";
import axios from "axios";

function* fetchWorker() {
  const resp = yield call(axios.get, [
    "http://makeup-api.herokuapp.com/api/v1/products.json",
  ]);
  yield put(setProducts(resp.data));
}

export function* fetchWatcher() {
  yield takeEvery("FETCH_PRODUCTS", fetchWorker);
}

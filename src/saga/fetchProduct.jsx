import { put, call, select, takeLatest } from "redux-saga/effects";
import { setProducts } from "../store/productsReducer";
import axios from "axios";

function* fetchWorker() {
  const url = yield select(({ url }) => url.url);
  try {
    const resp = yield call(axios.get, [url]);
    yield put(setProducts(resp.data));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchWatcher() {
  yield takeLatest("FETCH_PRODUCTS", fetchWorker);
}

import { put, call, select, takeLatest } from "redux-saga/effects";
import { setSingleProduct } from "../store/productsReducer";
import axios from "axios";

function* fetchSingleWorker() {
  const url = yield select(({ url }) => url.singleUrl);
  try {
    const resp = yield call(axios.get, [url]);
    yield put(setSingleProduct(resp.data));
    console.log(resp.data)
  } catch (err) {
    console.log(err);
  }
}

export function* fetchSingleWatcher() {
  yield takeLatest("FETCH_SINGLE_PRODUCT", fetchSingleWorker);
}

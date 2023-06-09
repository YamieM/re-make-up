import { put, call, takeLatest } from "redux-saga/effects";
import { apiFetchProducts } from "./api";
import { fetchProductsError, fetchProductsSuccess } from "../store/productsReducer";

function* fetchWorker({ payload }) {
  try {
    const resp = yield call(apiFetchProducts, payload);
    yield put(fetchProductsSuccess(resp.data));
    console.log(resp);
  } catch (err) {
    yield put(fetchProductsError(err));
  }
}

export function* fetchWatcher() {
  yield takeLatest("FETCH_PRODUCTS", fetchWorker);
}

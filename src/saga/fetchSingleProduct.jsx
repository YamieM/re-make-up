import { put, call, takeLatest } from "redux-saga/effects";
import { apiFetchSingleProduct } from "./api";
import {
  fetchSingleProductError,
  fetchSingleProductSuccess,
} from "../store/singleProductReducer";

function* fetchSingleWorker({ payload }) {
  try {
    const resp = yield call(apiFetchSingleProduct, payload);
    yield put(fetchSingleProductSuccess(resp.data));
  } catch (err) {
    yield put(fetchSingleProductError(err));
    console.log(err);
  }
}

export function* fetchSingleWatcher() {
  yield takeLatest("FETCH_SINGLE_PRODUCT", fetchSingleWorker);
}

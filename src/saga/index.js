import { all } from "redux-saga/effects";
import { fetchWatcher } from "./fetchProducts";
import { fetchSingleWatcher } from "./fetchSingleProduct";
export function* rootWatcher() {
    yield all([fetchWatcher(),fetchSingleWatcher()])
}

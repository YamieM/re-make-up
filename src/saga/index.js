import { all } from "redux-saga/effects";
import { fetchWatcher } from "./fetchProduct";
import { fetchSingleWatcher } from "./fetchSingleProduct";
export function* rootWatcher() {
    yield all([fetchWatcher(),fetchSingleWatcher()])
}

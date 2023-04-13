import { applyMiddleware, createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { urlReducer } from "./urlReducer";
import { fetchWatcher } from "../hooks/fetchHook";
import { productsReducer } from "./productsReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  url: urlReducer,
  products: productsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(fetchWatcher);

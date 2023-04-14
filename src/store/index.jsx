import { applyMiddleware, createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { urlReducer } from "./urlReducer";
import { productsReducer } from "./productsReducer";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  url: urlReducer,
  products: productsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootWatcher);

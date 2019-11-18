import { createStore, applyMiddleware } from "redux";
import { RootReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

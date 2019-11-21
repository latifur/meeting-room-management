import { createStore } from "redux";
import { RootReducer } from "./reducers";
// import createSagaMiddleware from "redux-saga";

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer);

export default store;

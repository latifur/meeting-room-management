import { combineReducers } from "redux";
import { roomReducer } from "./roomReducers";

export const RootReducer = combineReducers({ room: roomReducer });

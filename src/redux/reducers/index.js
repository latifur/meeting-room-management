import { combineReducers } from "redux";
import { roomReducer } from "./roomReducers";
import { userReducer } from "./userReducer";

export const RootReducer = combineReducers({
  room: roomReducer,
  user: userReducer
});

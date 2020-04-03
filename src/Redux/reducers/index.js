import { combineReducers } from "redux";
import isLoggedReducer from "./isLoggedReducer";

const allReducers = combineReducers({
  isLogged: isLoggedReducer
});

export default allReducers;
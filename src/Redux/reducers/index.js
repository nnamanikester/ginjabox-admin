import { combineReducers } from "redux";
import isLoggedReducer from "./isLoggedReducer";
import permissionReducer from "./permissionReducer";

const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  permission: permissionReducer
});

export default allReducers;
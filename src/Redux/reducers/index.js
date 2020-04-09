import { combineReducers } from "redux";
import isLoggedReducer from "./isLoggedReducer";
import permissionReducer from "./permissionReducer";
import usersReducer from "./usersReducer";

const allReducers = combineReducers({
  isLogged: isLoggedReducer,
  permission: permissionReducer,
  users: usersReducer
});

export default allReducers;
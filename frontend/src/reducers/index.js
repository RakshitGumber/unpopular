import { combineReducers } from "redux";
import posts from "./posts";
import userReducer from "./user";

export default combineReducers({ posts, userReducer });

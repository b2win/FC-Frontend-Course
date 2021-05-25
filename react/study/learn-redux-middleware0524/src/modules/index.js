import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";
import loading from "./loading";
import post from "./post";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
  post,
});

export default rootReducer;

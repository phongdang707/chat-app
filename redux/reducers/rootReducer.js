import counterReducer from "./counterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: counterReducer,
});

export default rootReducer;

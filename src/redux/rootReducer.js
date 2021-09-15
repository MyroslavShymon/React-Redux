import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { postsReducer } from "./postsRecuer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReducer,
});

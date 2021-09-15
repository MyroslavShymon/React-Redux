import { CREATE_POST } from "../types";
import { setAlert } from "../actions";

const forbiddenWords = ["fuck", "php"];

export function forbiddenmWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type == CREATE_POST) {
        const found = forbiddenWords.filter((word) =>
          action.payload.title.includes(word)
        );
        if (found.length) {
          return dispatch(setAlert("You're spammer"));
        }
      }
      return next(action);
    };
  };
}

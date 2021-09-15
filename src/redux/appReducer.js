import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from "./types";

const initialState = {
  loading: false,
  text: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };

    case HIDE_LOADER:
      return { ...state, loading: false };

    case SHOW_ALERT:
      return { ...state, text: String(action.payload) };

    case HIDE_ALERT:
      return { ...state, text: null };
    default:
      return state;
  }
};

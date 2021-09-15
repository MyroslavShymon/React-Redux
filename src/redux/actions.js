import {
  CREATE_POST,
  REQUEST_POSTS,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function setAlert(text) {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: text });
    setInterval(() => {
      dispatch(closeAlert);
    }, 3000);
  };
}

export function closeAlert() {
  return {
    type: HIDE_ALERT,
  };
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS,
  };
  // return async (dispatch) => {
  //   dispatch(loadingStart());
  //   try {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const json = await response.json();
  //     dispatch({ type: FETCH_POSTS, payload: json });
  //     dispatch(loadingEnding());
  //   } catch (error) {
  //     dispatch(setAlert(error));
  //   }
  // };
}

export function loadingStart() {
  return {
    type: SHOW_LOADER,
  };
}

export function loadingEnding() {
  return {
    type: HIDE_LOADER,
  };
}

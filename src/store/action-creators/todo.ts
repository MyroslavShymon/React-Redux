import axios from "axios";
import { Dispatch } from "redux";
import { TodoActions, TodoActionTypes } from "../../types/todo";

export const fetchTodo = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoActions>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: { _page: page, _limit: limit },
        }
      );
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: TodoActionTypes.FETCH_TODOS_ERROR,
        payload: `Error: ${error}`,
      });
    }
  };
};

export function setTodosPage(page: number): TodoActions {
  return { type: TodoActionTypes.SET_TODOS_PAGE, payload: page };
}

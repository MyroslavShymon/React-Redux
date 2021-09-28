import { TodoActions, TodoActionTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  error: null,
  limit: 10,
  page: 1,
  loading: false,
};

export const todoReducer = (
  state = initialState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODOS:
      return { ...state, loading: true };
    case TodoActionTypes.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };
    case TodoActionTypes.SET_TODOS_PAGE:
      return { ...state, page: action.payload };

    default:
      return state;
  }
};

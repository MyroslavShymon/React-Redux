export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
  SET_TODOS_PAGE = "SET_TODOS_PAGE",
}

export interface FetchTodosAction {
  type: TodoActionTypes.FETCH_TODOS;
}
export interface FetchTodosSuccessAction {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}
export interface FetchTodosErrorAction {
  type: TodoActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}
export interface SetTodosPageAction {
  type: TodoActionTypes.SET_TODOS_PAGE;
  payload: number;
}

export type TodoActions =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction
  | SetTodosPageAction;

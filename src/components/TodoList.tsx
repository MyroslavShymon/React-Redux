import * as React from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

// interface TodoListProps {

// }<TodoListProps>

const TodoList: React.FC = () => {
  const { error, limit, loading, page, todos } = useTypedSelector(
    (state) => state.todos
  );
  const { fetchTodo, setTodosPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  React.useEffect(() => {
    fetchTodo(page, limit);
  }, [page]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            key={p}
            onClick={() => setTodosPage(p)}
            style={{
              margin: 5,
              padding: 5,
              cursor: "pointer",
              border: p === page ? "2px solid green" : "1px solid grey",
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

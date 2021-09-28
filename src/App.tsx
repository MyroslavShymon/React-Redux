import * as React from "react";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

// interface AppProps {

// }<AppProps>

const App: React.FC = () => {
  return (
    <div>
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
};

export default App;

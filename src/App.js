import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <header>
        <h1>Todo list</h1>
      </header>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;

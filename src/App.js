import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <header>
        <h1>Todo list</h1>
      </header>

      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;

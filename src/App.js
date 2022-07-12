import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);
  return [todoList, setTodoList];
};

const App = () => {
  const [todoList, setTodoList] = useSemiPersistentState();
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

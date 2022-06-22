import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const App = () => {
  //create a new state variable named newTodo with update function named setNewTodo
  //useState hook
  const [newTodo, setNewTodo] = React.useState("");
  return (
    <div>
      <header>
        <h1>Todo list</h1>
      </header>
      {/* Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component */}
      <AddTodoForm onAddTodo={setNewTodo} />
      {/* add a paragraph element that displays the value of newTodo variable */}
      <p> New to do: {newTodo}</p>
      <TodoList />
    </div>
  );
};

export default App;

import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  { id: 0, title: "Learn React" },
  { id: 1, title: "Review JavaScript" },
  { id: 2, title: "Complete assignment" },
];

const TodoList = () => {
  return (
    <ul>
      {todoList.map((todo) => (
        //Pass key as a prop equal to the id of the todo object
        //Pass todo as a prop
        <TodoListItem key={todo.id.toString()} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;

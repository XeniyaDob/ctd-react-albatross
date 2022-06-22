import React from "react";

// Add props as a parameter in the TodoListItem function
const TodoListItem = (props) => {
  // Update the todo object reference to come from props
  return <li>{props.todo.title}</li>;
};

export default TodoListItem;

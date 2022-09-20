import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todoList, onRemoveTodo, onComplete }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id.toString()}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
          onComplete={onComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;

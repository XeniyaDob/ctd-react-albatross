import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
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

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  onComplete: PropTypes.func,
};
export default TodoList;

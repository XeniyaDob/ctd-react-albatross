import React from "react";

const TodoListItem = ({ todo, onRemoveTodo, onComplete }) => {
  return (
    <>
      <li>
        <span
          style={{
            textDecoration: todo.isComplete ? "line-through" : "none",
          }}
        >
          {todo.fields.Title}
        </span>
        <span>
          <button type="button" onClick={() => onComplete(todo.id)}>
            {todo.isComplete ? "Undo" : "Done"}
          </button>
          <button type="button" onClick={() => onRemoveTodo(todo.id)}>
            Remove
          </button>
        </span>
      </li>
    </>
  );
};

export default TodoListItem;

import React from "react";
import styles from "./TodoListItem.module.css";

const TodoListItem = ({ todo, onRemoveTodo, onComplete }) => {
  return (
    <>
      <li className={styles.ListItem}>
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

import React from "react";
import styles from "./TodoListItem.module.css";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";

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
          <button
            type="button"
            onClick={() => onComplete(todo.id)}
            className={styles.smallButtons}
          >
            {todo.isComplete ? <BiIcons.BiUndo /> : <IoIcons.IoMdDoneAll />}
          </button>
          <button
            type="button"
            onClick={() => onRemoveTodo(todo.id)}
            className={styles.smallButtons}
          >
            <MdIcons.MdClose />
          </button>
        </span>
      </li>
    </>
  );
};

export default TodoListItem;

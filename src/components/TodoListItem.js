import React from "react";
import styles from "./TodoListItem.module.css";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import PropTypes from "prop-types";

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

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  onComplete: PropTypes.func,
};

export default TodoListItem;

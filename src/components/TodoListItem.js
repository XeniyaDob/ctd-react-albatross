import React, { useState } from "react";
import styles from "./TodoListItem.module.css";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo, onComplete, onChange }) => {
  const [toggle, setToggle] = useState(true);
  const [title, SetTitle] = useState(todo.fields.Title);

  const editTodo = (event) => {
    setToggle(!toggle);
    event.preventDefault();
    event.stopPropagation();
  };
  let tags;
  if (toggle) {
    tags = <span onClick={editTodo}>{title}</span>;
  } else {
    tags = (
      <input
        type="text"
        value={title}
        className={styles.itemWithInput}
        onChange={(event) => {
          SetTitle(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === "Escape") {
            setToggle(!toggle);
            event.preventDefault();
            event.stopPropagation();
            onChange(todo.id, title);
          }
        }}
      />
    );
  }
  return (
    <>
      <li
        className={styles.ListItem}
        style={{
          textDecoration: todo.isComplete ? "line-through" : "none",
        }}
      >
        {tags}

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

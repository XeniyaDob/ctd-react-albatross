import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTitleChange = (event) => {
    const newTodo = event.target.value;
    setTodoTitle(newTodo);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    onAddTodo({ fields: { Title: todoTitle } });
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo} className={styles.form}>
      <InputWithLabel
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
        name="title"
        placeholder="What to do?"
      >
        {/* <strong>Title:</strong> */}
      </InputWithLabel>
      <button className={styles.inputButton} type="submit">
        Add
      </button>
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;

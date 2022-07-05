import React, { useState } from "react";

const AddTodoForm = (props) => {
  const [todoTitle, setTodoTitle] = useState([]);
  const handleTitleChange = (event) => {
    const newTodo = event.target.value;
    setTodoTitle(newTodo);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    props.onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title: </label>
      <input
        value={todoTitle}
        onChange={handleTitleChange}
        name="title"
        type="text"
        placeholder="What to do"
        id="todoTitle"
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;

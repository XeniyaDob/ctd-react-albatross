import React from "react";

function AddTodoForm() {
  return (
    <form>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" placeholder="What to do" id="todoTitle"></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;

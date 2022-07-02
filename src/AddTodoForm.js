import React from "react";

const AddTodoForm = (props) => {
  const handleAddTodo = (event) => {
    event.preventDefault();
    console.log("submission prevented");
    //retrieve the value of the title element from the event target and store it in a variable named todoTitle
    const todoTitle = event.target.title.value;
    //console.log(todoTitle);
    //console.log(event);
    //reset the form so the text input value is cleared
    event.target.reset();
    // Inside the handleAddTodo function, invoke the onAddTodo callback prop
    //and pass newTodo as an argument
    props.onAddTodo(todoTitle);
    //console.log(props.onAddTodo(props.newTodo));
  };
  return (
    //Add onSubmit prop to form element and pass the handleAddTodo function by reference
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title: </label>
      <input
        //Add a name attribute to the text input with value title
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

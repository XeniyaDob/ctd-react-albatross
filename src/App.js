import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
<<<<<<< HEAD
import Sidebar from "./Sidebar";
=======
>>>>>>> 42c54d3d54e4a7961743e7440745f8cd7f66b313

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // url is a global variable that can be called at any time within the component
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

  React.useEffect(() => {
    //starts the fetching, which is the endpoint
    fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    })
      //fetch is asynchronous and will be returning a Promise by .then()
      //API sends the data in text format and to use it we need to convert back into an Object
      .then((response) => response.json())
      .then((data) => {
        console.log("**********", data.records);
        //The data is the argument we passed in line 21 for the then method.
        //“records” is the data coming from the API
        //Update the setToDoList
        setTodoList(data.records);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);

  //first thing to do is declaring the function that will create the new todo
  const addTodo = (newTodo) => {
    fetch(url, {
      method: "POST",
      //Content-Type: application/json. Indicates that the request body format is JSON.
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-type": "application/json",
      },
      //JSON.stringify() which has the functionality of converting the object we are sending to the API to JSON
      //After converting to JSON, handleAddTodo in AddToDoForm.js component line 9
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      //we are fetching the data with the GET method again. That means the page will be re-render the new todo once the addTodo() function is trigged.
      .then((data) => {
        setTodoList([...todoList, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleToggleComplete = (id) => {
    console.log(id);
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        const updatedItem = {
          ...todo,
          isComplete: !todo.isComplete,
        };

        return updatedItem;
      }

      return todo;
    });

    setTodoList(newTodoList);
  };

  //declaring the function that will remove a todo
  const removeTodo = (id) => {
    fetch(`${url}?records[]=${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodoList(todoList.filter((item) => item.id !== id));
      });
  };

  return (
    <Router>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.todoContainer}>
          <h1>Todo list</h1>
          <Routes>
            <Route
              index
              exact
              path="/"
              element={
                <>
                  <AddTodoForm onAddTodo={addTodo} />

              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList
                  todoList={todoList}
                  onRemoveTodo={removeTodo}
                  onComplete={handleToggleComplete}
                />
              )}
            </>
          }
        />

        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </Router>
  );
};

export default App;

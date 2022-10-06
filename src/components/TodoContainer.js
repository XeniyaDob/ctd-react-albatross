import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm.js";
import TodoList from "./TodoList";
import styles from "../App.module.css";
import PropTypes from "prop-types";

const TodoContainer = ({ airtableName }) => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sortedTitles = (a, b) => {
    const objectA = a.fields.Title.toLowerCase();
    const objectB = b.fields.Title.toLowerCase();
    //toLowerCase()
    if (objectA < objectB) {
      return -1;
    } else if (objectA === objectB) {
      return 0;
    } else {
      return 1;
    }
  };

  const sortByTitle = () => {
    setTodoList([...todoList.sort(sortedTitles)]);
  };
  React.useEffect(() => {
    //starts the fetching, which is the endpoint
    fetch(
      `https://api.airtable.com/v0/${
        process.env.REACT_APP_AIRTABLE_BASE_ID
      }/${encodeURIComponent(airtableName)}`,

      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      //fetch is asynchronous and will be returning a Promise by .then()
      //API sends the data in text format and to use it we need to convert back into an Object
      .then((response) => response.json())
      .then((data) => {
        data.records.sort(sortedTitles);
        setTodoList(data.records);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [airtableName]);

  React.useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);

  //first thing to do is declaring the function that will create the new todo
  const addTodo = (newTodo) => {
    fetch(
      `https://api.airtable.com/v0/${
        process.env.REACT_APP_AIRTABLE_BASE_ID
      }/${encodeURIComponent(airtableName)}`,
      {
        method: "POST",
        //Content-Type: application/json. Indicates that the request body format is JSON.
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-type": "application/json",
        },
        //JSON.stringify() which has the functionality of converting the object we are sending to the API to JSON
        //After converting to JSON, handleAddTodo in AddToDoForm.js component line 9
        body: JSON.stringify(newTodo),
      }
    )
      .then((response) => response.json())
      //we are fetching the data with the GET method again. That means the page will be re-render the new todo once the addTodo() function is trigged.
      .then((data) => {
        setTodoList([...todoList, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const updateTodo = (id, newTitle) => {
    //console.log("ID,Title", id, newTitle);
    fetch(
      `https://api.airtable.com/v0/${
        process.env.REACT_APP_AIRTABLE_BASE_ID
      }/${encodeURIComponent(airtableName)}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              id,
              fields: {
                Title: newTitle,
              },
            },
          ],
        }),
      }
    )
      .then((response) => response.json())
      .then(() => {
        //console.log("Title", id);
        const updatedTodoList = JSON.parse(JSON.stringify(todoList));
        //console.log("UpdatedTodolist", updatedTodoList);
        const updatedItem = updatedTodoList.find((item) => item.id === id);
        updatedItem.fields.Title = newTitle;
        setTodoList(updatedTodoList);
      });
  };

  const handleToggleComplete = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        const completedItem = {
          ...todo,
          isComplete: !todo.isComplete,
        };

        return completedItem;
      }

      return todo;
    });

    setTodoList(newTodoList);
  };

  //declaring the function that will remove a todo
  const removeTodo = (id) => {
    fetch(
      `https://api.airtable.com/v0/${
        process.env.REACT_APP_AIRTABLE_BASE_ID
      }/${encodeURIComponent(airtableName)}?records[]=${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTodoList(todoList.filter((item) => item.id !== id));
      });
  };

  return (
    <div className={styles.todoContainer}>
      <h1>{airtableName} List </h1>

      <AddTodoForm onAddTodo={addTodo} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList
          todoList={todoList}
          onChange={updateTodo}
          onRemoveTodo={removeTodo}
          onComplete={handleToggleComplete}
          sortByTitle={sortByTitle}
        />
      )}
    </div>
  );
};

TodoContainer.propTypes = {
  airtableName: PropTypes.string,
};

export default TodoContainer;

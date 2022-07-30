import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const[isLoading,setIsLoading ]=useState(true)

  React.useEffect(()=>{
    new Promise((resolve,reject)=>
    setTimeout(
      ()=>resolve({data:{todoList:JSON.parse(localStorage.getItem("savedTodoList"))}}),
      2000)).then((result)=>{setTodoList(result.data.todoList)})
      setIsLoading(false)
  },[])

  React.useEffect(() => {
    if(!isLoading){localStorage.setItem("savedTodoList", JSON.stringify(todoList));}
    
  }, [todoList]);


  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
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

  const handleRemoveTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <header>
        <h1>Todo list</h1>
      </header>

      <AddTodoForm onAddTodo={addTodo} />

      <TodoList
        todoList={todoList}
        onRemoveTodo={handleRemoveTodo}
        onComplete={handleToggleComplete}
      />
    </>
  );
};

export default App;

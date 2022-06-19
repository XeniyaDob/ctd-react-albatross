import React from "react";

const todoList = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Review JavaScript" },
  { id: 3, title: "Complete assignment" },
];

function TodoList() {
  return (
    <ul>
      {/* render the TodoList */}
      {todoList.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;

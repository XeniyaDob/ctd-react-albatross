import React from "react";

const todoList = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Review JavaScript" },
  { id: 3, title: "Complete assignment" },
];

function App() {
  return (
    <div>
      <header>
        <h1>Todo list</h1>
      </header>
      <ul>
        {/* render the TodoList */}
        {todoList.map((item) => {
          return (
            <li>
              {item.id} {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

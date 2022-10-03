import React, { useState } from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import { sortBy } from "lodash";
import { Toggle } from "./Toggle.js";

const SORTS = {
  NONE: (todoList) => todoList,
  TITLE: (todoList) => sortBy(todoList, "title").reverse(),
  ID: (todoList) => sortBy(todoList, "id").reverse(),
};

const TodoList = ({ todoList, onRemoveTodo, onComplete }) => {
  const [sort, setSort] = useState({
    sortKey: "NONE",
    isReverse: false,
  });

  const handleSort = (sortKey) => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;
    setSort({ sortKey: sortKey, isReverse: isReverse });
  };

  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse
    ? sortFunction(todoList).reverse()
    : sortFunction(todoList);
  return (
    <>
      <span>
        <Toggle onChange={() => handleSort("TITLE")} />
      </span>
      <ul>
        {sortedList.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onComplete={onComplete}
          />
        ))}
      </ul>
    </>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  onComplete: PropTypes.func,
};
export default TodoList;

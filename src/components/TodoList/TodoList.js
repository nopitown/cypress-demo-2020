import React from "react";
import styles from "./styles.module.css";

const TodoList = ({ todos, removeTodo }) => {
  const handleClick = todo => {
    removeTodo(todo);
  };

  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.title}</span>
          <button
            className={styles.removeButton}
            onClick={() => handleClick(todo)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

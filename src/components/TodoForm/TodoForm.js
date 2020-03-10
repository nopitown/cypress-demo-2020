import React, { useState } from "react";
import styles from "./styles.module.css";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const handleChange = event => {
    setTodo(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={todo}
        onChange={handleChange}
        placeholder="Enter a new todo"
      />
    </form>
  );
};

export default TodoForm;

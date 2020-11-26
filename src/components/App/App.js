import React, { useState, useEffect } from "react";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

import styles from "./styles.module.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(({ data }) => setTodos(data.slice(0, 10).concat(todos)));
  }, []);

  const addTodo = todo => {
    setTodos(todos.concat({ id: uuidv4(), title: todo }));
  };
  const removeTodo = todoToRemove => {
    const updatedTodos = todos.filter(todo => todo.id !== todoToRemove.id);
    setTodos(updatedTodos);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>To Do list</h1>
      <TodoList todos={todos} removeTodo={removeTodo} />
      <TodoForm addTodo={addTodo} />
    </main>
  );
}

export default App;

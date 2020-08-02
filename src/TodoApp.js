import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Walk dog", completed: false },
    { id: 2, task: "Wash car", completed: true },
    { id: 3, task: "Grow beard", completed: true },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTask) => {
    setTodos([...todos, { id: uuidv4(), task: newTask, completed: false }]);
  };
  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  const toggleTodo = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

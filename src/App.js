import React from "react";
import { ThemeProvider } from "@material-ui/core";
import todosTheme from "./todosTheme";
import TodoApp from "./TodoApp";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={todosTheme}>
      <TodoApp />
    </ThemeProvider>
  );
}

export default App;

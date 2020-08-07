import React, { useContext } from "react";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import { TodosContext } from "./context/todos.context";
import TodoList from "./TodoList";

export default function TodoDashboard() {
  const date = moment();
  const todos = useContext(TodosContext).filter(
    (todo) => todo.date === date.format("YYYY-MM-DD")
  );

  return (
    <>
      <Typography gutterBottom>Today - {date.format("MMMM Do")}</Typography>
      <TodoList todos={todos} />
    </>
  );
}

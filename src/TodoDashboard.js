import React, { useContext } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { TodosContext } from "./context/todos.context";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    "& h1": {
      fontSize: "2.5rem",
    },
  },
  date: {
    marginLeft: theme.spacing(1),
    fontSize: "1rem",
    letterSpacing: "0.1rem",
    opacity: "0.5",
  },
}));

export default function TodoDashboard() {
  const classes = useStyles();
  const date = moment();
  const todos = useContext(TodosContext).filter(
    (todo) => todo.date === date.format("YYYY-MM-DD")
  );

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        Today
        <span className={classes.date}>{date.format("dddd, MMMM Do")}</span>
      </Typography>

      <TodoList todos={todos} />
      <TodoForm />
    </div>
  );
}

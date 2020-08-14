import React, { useState, useContext } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { TodosContext } from "./contexts/todos.context";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(7),
    "& h1": {
      fontSize: "2.1rem",
    },
  },
}));

export default function AllTodos() {
  const [sort, setSort] = useState("dateAsc");
  const todos = useContext(TodosContext);
  const classes = useStyles();

  const sortTodos = (action) => {
    switch (action) {
      case "dateDesc": {
        return todos.sort((a, b) => moment(b.date).diff(a.date));
      }
      case "dateAsc": {
        return todos.sort((a, b) => moment(a.date).diff(b.date));
      }
      default: {
        return todos;
      }
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          Your Todos
        </Typography>
        <Divider />
        <button onClick={() => setSort("dateAsc")}>Date Ascending</button>
        <button onClick={() => setSort("dateDesc")}>Date Descending</button>
        <TodoList todos={sortTodos(sort)} />
      </Grid>
      <TodoForm />
    </Grid>
  );
}

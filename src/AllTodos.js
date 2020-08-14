import React, { useContext } from "react";
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
  const classes = useStyles();
  const todos = useContext(TodosContext);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          Your Todos
        </Typography>
        <Divider />
        <TodoList todos={todos} />
      </Grid>
      <TodoForm />
    </Grid>
  );
}

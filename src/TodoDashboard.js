import React, { useState, useContext } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { TodosContext } from "./context/todos.context";
import { TodoFormContext } from "./context/todoForm.context";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(7),
    "& h1": {
      fontSize: "2.1rem",
    },
  },
  addTask: {
    fontSize: "1.2rem",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  date: {
    marginLeft: theme.spacing(1),
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    opacity: "0.5",
  },
}));

export default function TodoDashboard() {
  const classes = useStyles();
  const date = moment();
  const todos = useContext(TodosContext).filter(
    (todo) => todo.date === date.format("YYYY-MM-DD")
  );
  const { handleOpen } = useContext(TodoFormContext);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          Today
          <span className={classes.date}>{date.format("dddd, MMMM Do")}</span>
        </Typography>
        <Divider />
        <TodoList todos={todos} />
        <Button
          className={classes.addTask}
          disableRipple
          disableFocusRipple
          startIcon={<AddIcon style={{ fontSize: "1.4rem" }} />}
          onClick={handleOpen}
        >
          Add a Task
        </Button>
      </Grid>
      <TodoForm />
    </Grid>
  );
}

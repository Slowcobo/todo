import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { TodosProvider } from "./context/todos.context";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoDashboard from "./TodoDashboard";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    overflowY: "scroll",
  },
}));

export default function TodoApp() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoDashboard />
          </TodosProvider>
        </Grid>
      </Grid>
    </div>
  );
}

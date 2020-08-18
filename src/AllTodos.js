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
  const [sortType, setSortType] = useState("dateAsc");
  const [filters, setFilters] = useState({
    completed: undefined,
    tags: [],
  });
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

  const allTodos = sortTodos(sortType).filter(
    (todo) =>
      (filters.completed === undefined ||
        todo.completed === filters.completed) &&
      filters.tags.every((filterTag) =>
        todo.tags.some((tag) => tag.id === filterTag.id)
      )
  );

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          Your Todos
        </Typography>
        <Divider />
        <button onClick={() => setSortType("dateAsc")}>Date Ascending</button>
        <button onClick={() => setSortType("dateDesc")}>Date Descending</button>
        <button onClick={() => setFilters({ ...filters, completed: true })}>
          Completed
        </button>
        <button
          onClick={() =>
            setFilters({
              ...filters,
              tags: [
                { id: "a716bfb4-d9df-11ea-87d0-0242ac130003", label: "Home" },
              ],
            })
          }
        >
          Home
        </button>
        <button onClick={() => setFilters({ completed: undefined, tags: [] })}>
          Reset
        </button>
        {allTodos.length ? (
          <TodoList todos={allTodos} />
        ) : (
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Typography>There are no tasks that match the criteria.</Typography>
            <Divider style={{ marginTop: "1rem" }} />
          </div>
        )}
      </Grid>
      <TodoForm />
    </Grid>
  );
}

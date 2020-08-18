import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import { TodosContext } from "./contexts/todos.context";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import weekdays from "./weekdays";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(7),
    "& h1": {
      fontSize: "2.1rem",
    },
  },
  date: {
    marginLeft: theme.spacing(1),
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    opacity: "0.5",
  },
}));

export default function TodosWeek() {
  const classes = useStyles();
  const dates = weekdays;
  const todos = useContext(TodosContext);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        {dates.map((date, i) => {
          const dailyTodos = todos.filter(
            (todo) => todo.date === date.format("YYYY-MM-DD")
          );

          return (
            <div key={date}>
              <Grid item xs={12}>
                <Typography variant="h1" gutterBottom>
                  {date.calendar().split(" ")[0]}
                  <span className={classes.date}>{date.format("MMMM Do")}</span>
                </Typography>
                <Divider />

                {dailyTodos.length ? (
                  <TodoList todos={dailyTodos} />
                ) : (
                  <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                    <Typography>You don't have any tasks today.</Typography>
                    <Divider style={{ marginTop: "1rem" }} />
                  </div>
                )}
              </Grid>

              {/* Only display down arrow if day isn't the last */}
              {i < dates.length - 1 && (
                <Grid
                  item
                  container
                  justify="center"
                  style={{ margin: "2rem 0" }}
                >
                  <ArrowDownwardOutlinedIcon />
                </Grid>
              )}
            </div>
          );
        })}
      </Grid>
      <TodoForm />
    </Grid>
  );
}

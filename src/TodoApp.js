import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TodosProvider } from "./contexts/todos.context";
import { TodoFormProvider } from "./contexts/todoForm.context";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import TodoDashboard from "./TodoDashboard";
import TodosToday from "./TodosToday";
import TodosWeek from "./TodosWeek";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh",
    overflowY: "scroll",
  },
}));

export default function TodoApp() {
  const classes = useStyles();

  return (
    <TodosProvider>
      <TodoFormProvider>
        <div className={classes.root}>
          <CssBaseline />

          {/* Nav Bar */}
          <Navbar />

          {/* Nav Drawer */}
          <Drawer />

          {/* Main Content */}
          <main className={classes.content}>
            <Switch>
              <Route exact path="/">
                <TodoDashboard />
              </Route>
              <Route exact path="/today">
                <TodosToday />
              </Route>
              <Route exact path="/week">
                <TodosWeek />
              </Route>
              <Route exact path="/todos"></Route>
            </Switch>
          </main>
        </div>
      </TodoFormProvider>
    </TodosProvider>
  );
}

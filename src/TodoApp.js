import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TodosProvider } from "./context/todos.context";
import { TodoFormProvider } from "./context/todoForm.context";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
import TodoDashboard from "./TodoDashboard";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
            <TodoDashboard />
          </main>
        </div>
      </TodoFormProvider>
    </TodosProvider>
  );
}

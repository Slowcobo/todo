import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TodoMetrics from "./TodoMetrics";
import TodosToday from "./TodosToday";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(7),
    "& h1": {
      fontSize: "2.1rem",
    },
  },
}));

export default function TodoDashboard() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <TodoMetrics />
      </Grid>
      <Grid item xs={12}>
        <TodosToday />
      </Grid>
    </Grid>
  );
}

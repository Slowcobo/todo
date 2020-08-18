import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { TodosContext } from "./contexts/todos.context";
import defaultTags from "./defaultTags";

const useStyles = makeStyles((theme) => ({
  root: {
    "& h2": {
      fontSize: "2.5rem",
    },
  },
}));

export default function TodoMetrics() {
  const todos = useContext(TodosContext);
  const todosCompleted = todos.filter((todo) => todo.completed);
  const classes = useStyles();

  const getMostTag = () => {
    let tagCount = 0;
    let mostTag;

    defaultTags.forEach((tag) => {
      const length = todos.filter((todo) =>
        todo.tags.some((todoTag) => todoTag.id === tag.id)
      ).length;
      if (length > tagCount) {
        tagCount = length;
        mostTag = tag;
      }
    });
    return mostTag;
  };

  const mostTag = getMostTag().label;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          Your Activity
        </Typography>
        <Divider style={{ marginBottom: "1rem" }} />
      </Grid>
      <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
        <Typography>Tasks Added</Typography>
        <Typography variant="h2">{todos.length}</Typography>
      </Grid>
      <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
        <Typography>Tasks Completed</Typography>
        <Typography variant="h2">{todosCompleted.length}</Typography>
      </Grid>
      <Grid item xs={12} sm={4} style={{ textAlign: "center" }}>
        <Typography>Most Tagged</Typography>
        <Typography variant="h2">{mostTag}</Typography>
      </Grid>
    </Grid>
  );
}

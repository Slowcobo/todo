import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { TodosContext } from "./contexts/todos.context";
import defaultTags from "./defaultTags";

export default function TodoMetrics() {
  const todos = useContext(TodosContext);
  const todosCompleted = todos.filter((todo) => todo.completed);

  const getActiveTag = () => {
    let tagCount = 0;
    let activeTag;

    defaultTags.forEach((tag) => {
      const length = todos.filter((todo) =>
        todo.tags.some((todoTag) => todoTag.id === tag.id)
      ).length;
      if (length > tagCount) {
        tagCount = length;
        activeTag = tag;
      }
    });
    return activeTag;
  };

  const activeTag = getActiveTag().label;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          Your Activity
        </Typography>
        <Divider style={{ marginBottom: "1rem" }} />
      </Grid>
      <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
        <Typography>Tasks Added</Typography>
        <Typography variant="h2">{todos.length}</Typography>
      </Grid>
      <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
        <Typography>Taks Completed</Typography>
        <Typography variant="h2">{todosCompleted.length}</Typography>
      </Grid>
      <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
        <Typography>Most Tagged</Typography>
        <Typography variant="h2">{activeTag}</Typography>
      </Grid>
    </Grid>
  );
}

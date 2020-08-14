import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return todos.length ? (
    <List>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <Todo {...todo} />
          <Divider />
        </React.Fragment>
      ))}
    </List>
  ) : (
    <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <Typography>You're all done for today!</Typography>
      <Divider style={{ marginTop: "1rem" }} />
    </div>
  );
}

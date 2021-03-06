import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <List>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <Todo {...todo} />
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

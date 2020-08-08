import React, { useState, useContext, memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { DispatchContext } from "./context/todos.context";
import EditTodoForm from "./EditTodoForm";

function Todo({ id, task, date, completed }) {
  const dispatch = useContext(DispatchContext);
  const [open, setOpen] = useState(false); // const { open, handleClose } = useContext(TodoFormContext);

  return (
    <>
      <ListItem style={{ height: "64px" }}>
        <Checkbox
          tabIndex={-1}
          checked={completed}
          onClick={() => dispatch({ type: "TOGGLE", id: id })}
        />
        <ListItemText
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton onClick={() => setOpen(true)}>
            <EditIcon aria-label="Edit" />
          </IconButton>
          <IconButton onClick={() => dispatch({ type: "REMOVE", id: id })}>
            <DeleteIcon aria-label="Delete" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <EditTodoForm
        id={id}
        task={task}
        date={date}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

export default memo(Todo);

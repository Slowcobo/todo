import React, { useState, useContext, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { DispatchContext } from "./contexts/todos.context";
import EditTodoForm from "./EditTodoForm";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
    padding: 0,
    fontSize: "0.6rem",
  },
}));

function Todo({ id, task, date, tags, completed }) {
  const dispatch = useContext(DispatchContext);
  const [open, setOpen] = useState(false); // const { open, handleClose } = useContext(TodoFormContext);
  const classes = useStyles();

  return (
    <>
      <ListItem style={{ height: "64px" }}>
        <Checkbox
          tabIndex={-1}
          checked={completed}
          onClick={() => dispatch({ type: "TOGGLE", id: id })}
        />
        <ListItemText
          style={{
            textDecoration: completed ? "line-through" : "none",
            width: "100%",
          }}
        >
          {task}
        </ListItemText>

        <div style={{ width: "100%" }}>
          {tags.map((tag) => (
            <Chip
              key={tag.id}
              //  icon={icon}
              label={tag.label}
              className={classes.chip}
            />
          ))}
        </div>

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

import React, { useState, useContext } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import EventNoteIcon from "@material-ui/icons/EventNote";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./context/todos.context";
import { TodoFormContext } from "./context/todoForm.context";
import TodoDatePicker from "./TodoDatePicker";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function TodoForm() {
  const dispatch = useContext(DispatchContext);
  const { open, handleClose } = useContext(TodoFormContext);
  const [task, handleChange, reset] = useInputState("");
  const [date, setDate] = useState(moment());
  const [showPicker, setShowPicker] = useState(false);
  const classes = useStyles();

  const handleFormClose = () => {
    handleClose();
    setShowPicker(false);
    reset();
  };

  const handleSubmit = () => {
    if (task.length) {
      dispatch({
        type: "ADD",
        task: task,
        date: moment(date).format("YYYY-MM-DD"),
      });
      handleFormClose();
    }
  };

  return (
    <Dialog
      className={classes.root}
      open={open}
      onClose={handleFormClose}
      fullWidth
      aria-labelledby="todo-form-dialog"
    >
      <DialogContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <InputBase
            value={task}
            autoFocus
            onChange={handleChange}
            placeholder="Add a Task"
            fullWidth
            style={{ fontSize: "1.3rem" }}
          />
        </form>
        <IconButton onClick={() => setShowPicker(true)}>
          <EventNoteIcon />
        </IconButton>

        <TodoDatePicker
          date={date}
          setDate={setDate}
          showPicker={showPicker}
          setShowPicker={setShowPicker}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFormClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

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
import { DispatchContext } from "./contexts/todos.context";
import TodoDatePicker from "./TodoDatePicker";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function EditTodoForm({ id, task, date, open, setOpen }) {
  const dispatch = useContext(DispatchContext);
  const [showPicker, setShowPicker] = useState(false);
  const [taskVal, handleTaskChange] = useInputState(task);
  const [dateVal, handleDateChange] = useState(date);
  const classes = useStyles();

  const handleFormClose = () => {
    setOpen(false); // handleClose();
    setShowPicker(false);
  };

  const handleSubmit = () => {
    dispatch({
      type: "EDIT",
      id: id,
      task: taskVal,
      date: moment(dateVal).format("YYYY-MM-DD"),
    });
    setOpen(false);
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
            value={taskVal}
            autoFocus
            onChange={handleTaskChange}
            fullWidth
            style={{ fontSize: "1.3rem" }}
          />
        </form>
        <IconButton onClick={() => setShowPicker(true)}>
          <EventNoteIcon />
        </IconButton>

        <TodoDatePicker
          date={dateVal}
          setDate={handleDateChange}
          showPicker={showPicker}
          setShowPicker={setShowPicker}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFormClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

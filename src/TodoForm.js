import React, { useState, useContext } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import EventNoteIcon from "@material-ui/icons/EventNote";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./context/todos.context";
import TodoDatePicker from "./TodoDatePicker";

const useStyles = makeStyles((theme) => ({
  addTask: {
    fontSize: "1.3rem",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

export default function TodoForm() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useContext(DispatchContext);
  const [task, handleChange, reset] = useInputState("");
  const [date, setDate] = useState(moment());
  const [showPicker, setShowPicker] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      handleClose();
    }
  };

  return (
    <div>
      <Button
        className={classes.addTask}
        disableRipple
        disableFocusRipple
        startIcon={<AddIcon style={{ fontSize: "1.5rem" }} />}
        onClick={handleClickOpen}
      >
        Add a Task
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        aria-labelledby="form-dialog-title"
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

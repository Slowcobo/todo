import React, { useState, useContext } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";
import { TodoFormContext } from "./contexts/todoForm.context";
import TodoDatePicker from "./TodoDatePicker";
import TodoTagPicker from "./TodoTagPicker";
import TodoTagList from "./TodoTagList";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function TodoForm() {
  const dispatch = useContext(DispatchContext);
  const { open, handleClose } = useContext(TodoFormContext);
  const [task, handleChange, reset] = useInputState("");

  const [date, setDate] = useState(moment());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [tags, setTags] = useState([]);
  const [showTagPicker, setShowTagPicker] = useState(false);

  const classes = useStyles();

  // Handle closing the todo form
  const handleFormClose = () => {
    // CLose dialogs
    handleClose();
    setShowDatePicker(false);

    // Reset state
    setDate(moment());
    setTags([]);
    reset();
  };

  // Add a new todo
  const handleSubmit = () => {
    if (task.length) {
      dispatch({
        type: "ADD",
        task: task,
        date: moment(date).format("YYYY-MM-DD"),
        tags: tags,
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

        {/* Tag List */}
        <TodoTagList tags={tags} setTags={setTags} />

        {/* Date Picker Icon */}
        <IconButton onClick={() => setShowDatePicker(true)}>
          <EventOutlinedIcon />
        </IconButton>
        {/* Date Picker */}
        <TodoDatePicker
          date={date}
          setDate={setDate}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
        />

        {/* Tag Icon */}
        <IconButton onClick={() => setShowTagPicker(true)}>
          <LabelOutlinedIcon />
        </IconButton>
        {/* Tag Picker */}
        <TodoTagPicker
          showTagPicker={showTagPicker}
          setShowTagPicker={setShowTagPicker}
          tags={tags}
          setTags={setTags}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFormClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

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
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";
import TodoDatePicker from "./TodoDatePicker";
import TodoTagPicker from "./TodoTagPicker";
import TodoTagList from "./TodoTagList";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function EditTodoForm({
  id,
  task,
  date,
  tags,
  setTags,
  open,
  setOpen,
}) {
  const dispatch = useContext(DispatchContext);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTagPicker, setShowTagPicker] = useState(false);
  const [taskVal, handleTaskChange] = useInputState(task);
  const [dateVal, handleDateChange] = useState(date);
  const classes = useStyles();

  const handleFormClose = () => {
    setOpen(false);
    setShowDatePicker(false);
  };

  const handleSubmit = () => {
    dispatch({
      type: "EDIT",
      id: id,
      task: taskVal,
      tags: tags,
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

        {/* Tag List */}
        <TodoTagList tags={tags} setTags={setTags} />

        {/* Date Picker Icon */}
        <IconButton onClick={() => setShowDatePicker(true)}>
          <EventNoteIcon />
        </IconButton>
        {/* Date Picker */}
        <TodoDatePicker
          date={dateVal}
          setDate={handleDateChange}
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
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}

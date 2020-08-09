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
import { TagsContext } from "./contexts/tags.context";
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
  const { tags, setTags } = useContext(TagsContext);
  const [openSelect, setOpenSelect] = useState(false);
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
        tags: tags,
      });
      handleFormClose();
    }
  };

  const handleSelectOpen = () => {
    setOpenSelect(true);
  };

  const handleSelectClose = () => {
    setOpenSelect(false);
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

        {/* Date Picker Icon */}
        <IconButton onClick={() => setShowPicker(true)}>
          <EventOutlinedIcon />
        </IconButton>
        {/* Date Picker */}
        <TodoDatePicker
          date={date}
          setDate={setDate}
          showPicker={showPicker}
          setShowPicker={setShowPicker}
        />
        {/* Tag Icon */}
        <IconButton onClick={handleSelectOpen}>
          <LabelOutlinedIcon />
        </IconButton>

        {/* Tag Picker */}
        {/* tags.map((tag) => (
            <MenuItem>{tag.label}</MenuItem>
          ))} */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFormClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}

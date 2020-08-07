import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import AddIcon from "@material-ui/icons/Add";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./context/todos.context";

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
  const [value, handleChange, reset] = useInputState("");
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const handleSubmit = () => {
    if (value.length) {
      dispatch({ type: "ADD", task: value });
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
              value={value}
              autoFocus
              onChange={handleChange}
              margin="normal"
              placeholder="Add a Task"
              fullWidth
              style={{ fontSize: "1.3rem" }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

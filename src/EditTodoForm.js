import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { DispatchContext } from "./context/todos.context";
import useInputState from "./hooks/useInputState";

export default function EditTodoForm({ id, task, toggleForm }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, task: value });
        reset();
        toggleForm();
      }}
      style={{ marginLeft: "1rem", width: "70%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { TodosContext } from "./context/todos.context";
import useInputState from "./hooks/useInputState";

export default function EditTodoForm({ id, task, toggleForm }) {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
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

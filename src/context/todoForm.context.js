import React, { useState, createContext } from "react";

export const TodoFormContext = createContext();
export function TodoFormProvider(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TodoFormContext.Provider value={{ open, handleOpen, handleClose }}>
      {props.children}
    </TodoFormContext.Provider>
  );
}

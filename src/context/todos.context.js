import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const todosData = useTodoState([]);

  return (
    <TodosContext.Provider value={todosData}>
      {props.children}
    </TodosContext.Provider>
  );
};

import React, { createContext, useReducer } from "react";
import todosReducer from "../reducer/todos.reducer";

export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
};

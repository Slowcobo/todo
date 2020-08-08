import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        {
          id: uuidv4(),
          task: action.task,
          date: action.date,
          completed: false,
        },
      ];
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT":
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, task: action.task, date: action.date }
          : todo
      );
    default:
      return todos;
  }
};

export default todosReducer;

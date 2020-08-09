import { v4 as uuidv4 } from "uuid";

const todosReducer = (todos, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...todos,
        {
          id: uuidv4(),
          task: action.task,
          date: action.date,
          tags: action.tags,
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
          ? { ...todo, task: action.task, date: action.date, tags: action.tags }
          : todo
      );
    default:
      return todos;
  }
};

export default todosReducer;

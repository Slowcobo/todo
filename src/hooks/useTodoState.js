import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuidv4 } from "uuid";

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addTodo: (newTask) => {
      setTodos([...todos, { id: uuidv4(), task: newTask, completed: false }]);
    },
    removeTodo: (todoId) => {
      setTodos(todos.filter((todo) => todo.id !== todoId));
    },
    toggleTodo: (todoId) => {
      setTodos(
        todos.map((todo) =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    editTodo: (todoId, newTask) => {
      setTodos(
        todos.map((todo) =>
          todo.id === todoId ? { ...todo, task: newTask } : todo
        )
      );
    },
  };
};

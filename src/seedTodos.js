import moment from "moment";

const seedTodos = [
  {
    id: 1,
    task: "Go jogging",
    date: moment().format("YYYY-MM-DD"),
    completed: false,
  },
  {
    id: 2,
    task: "Practice coding",
    date: moment().add(1, "days").format("YYYY-MM-DD"),
    completed: false,
  },
  {
    id: 3,
    task: "Play video games",
    date: moment().add(2, "days").format("YYYY-MM-DD"),
    completed: false,
  },
  {
    id: 4,
    task: "Finish design project",
    date: moment().add(3, "days").format("YYYY-MM-DD"),
    completed: false,
  },
  {
    id: 5,
    task: "Order groceries",
    date: moment().add(4, "days").format("YYYY-MM-DD"),
    completed: false,
  },
  {
    id: 6,
    task: "Practice the piano",
    date: moment().add(5, "days").format("YYYY-MM-DD"),
    completed: false,
  },
  {
    id: 7,
    task: "Finish watching Dark",
    date: moment().add(6, "days").format("YYYY-MM-DD"),
    completed: false,
  },
  {
    id: 8,
    task: "Clean the garage",
    date: moment().add(7, "days").format("YYYY-MM-DD"),
    completed: false,
  },
];

export default seedTodos;

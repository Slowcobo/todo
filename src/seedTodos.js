import moment from "moment";
import defaultTags from "./defaultTags";

const seedTodos = [
  {
    id: 0,
    task: "Go jogging",
    date: moment().format("YYYY-MM-DD"),
    tags: [defaultTags[0]],
    completed: false,
  },
  {
    id: 1,
    task: "Practice coding",
    date: moment().add(1, "days").format("YYYY-MM-DD"),
    tags: [defaultTags[1]],
    completed: false,
  },
  {
    id: 2,
    task: "Play video games",
    date: moment().add(2, "days").format("YYYY-MM-DD"),
    tags: [defaultTags[2]],
    completed: false,
  },
  {
    id: 3,
    task: "Finish design project",
    date: moment().add(3, "days").format("YYYY-MM-DD"),
    tags: [defaultTags[3]],
    completed: false,
  },
  {
    id: 4,
    task: "Order groceries",
    date: moment().add(4, "days").format("YYYY-MM-DD"),
    tags: [defaultTags[4]],
    completed: false,
  },
  {
    id: 5,
    task: "Practice the piano",
    date: moment().add(5, "days").format("YYYY-MM-DD"),
    tags: [defaultTags[5]],
    completed: false,
  },
  {
    id: 6,
    task: "Finish watching Dark",
    date: moment().add(6, "days").format("YYYY-MM-DD"),
    tags: [defaultTags[6]],
    completed: false,
  },
  {
    id: 7,
    task: "Clean the garage",
    date: moment().add(7, "days").format("YYYY-MM-DD"),
    tags: [defaultTags[7]],
    completed: false,
  },
];

export default seedTodos;

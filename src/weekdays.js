import moment from "moment";

const weekdays = [
  moment(),
  moment().add(1, "days"),
  moment().add(2, "days"),
  moment().add(3, "days"),
  moment().add(4, "days"),
  moment().add(5, "days"),
  moment().add(6, "days"),
];

export default weekdays;

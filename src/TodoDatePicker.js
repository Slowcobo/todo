import React from "react";
import DateFnsUtils from "@date-io/moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import Dialog from "@material-ui/core/Dialog";

export default function TodoDatePicker({
  date,
  setDate,
  showDatePicker,
  setShowDatePicker,
  showTagPicker,
  setShowTagPicker,
}) {
  const handleChange = (value) => {
    setDate(value);
    setShowDatePicker(false);
  };
  return (
    <Dialog open={showDatePicker} onClose={() => setShowDatePicker(false)}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          value={date}
          onChange={handleChange}
          animateYearScrolling
          variant="static"
        />
      </MuiPickersUtilsProvider>
    </Dialog>
  );
}

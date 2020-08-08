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
  showPicker,
  setShowPicker,
}) {
  const handleChange = (value) => {
    setDate(value);
    setShowPicker(false);
  };
  return (
    <Dialog open={showPicker} onClose={() => setShowPicker(false)}>
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

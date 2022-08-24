import React, { useState } from "react";
import DatePicker from "react-date-picker";
//use react-datepicker
function Datepicker() {
  const [value, onChange] = useState("");

  return (
    <div>
      <DatePicker
        onChange={onChange}
        value={value}
        closeCalendar={false}
        dayPlaceholder="dd"
      />
    </div>
  );
}
export default Datepicker;

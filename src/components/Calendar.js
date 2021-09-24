// import { render } from '@testing-library/react';
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    return (
      <div>
        Start Date
        <DatePicker
          wrapperClassName="datepicker"
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={date => setStartDate(date)}
        />
        End Date
        <DatePicker
          wrapperClassName="datepicker"
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={date => setEndDate(date)}
        />
      </div>
    );
   }

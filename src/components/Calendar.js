// import { render } from '@testing-library/react';
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar(props) {
    //const [startDate, setStartDate] = useState(new Date());
    //const [endDate, setEndDate] = useState(new Date());
    return (
      <div>
        Start Date
        <DatePicker
          wrapperClassName="datepicker"
          selected={props.startDate}
          selectsStart
          startDate={props.startDate}
          endDate={props.endDate}
          onChange={date => props.setStartDate(date)}
        />
        End Date
        <DatePicker
          wrapperClassName="datepicker"
          selected={props.endDate}
          selectsEnd
          startDate={props.startDate}
          endDate={props.endDate}
          minDate={props.startDate}
          onChange={date => props.setEndDate(date)}
        />
      </div>
    );
   }

"use client";
import { addDays } from "date-fns";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormStatus from "./FormStatus";
export default function CreateReserveForm() {
  const currentDate = new Date();
  const defaultEndDate = addDays(currentDate, 3);

  const [starDate, setStarDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  const changeDate = (dates: any) => {
    const [start, end] = dates;
    setStarDate(start);
    setEndDate(end);
  };

  return (
    <form action="">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Arrival - Departure</legend>
        <DatePicker
          selected={starDate}
          startDate={starDate}
          endDate={endDate}
          onChange={changeDate}
          minDate={currentDate}
          selectsRange={true}
          dateFormat={"dd-MM-YYYY"}
          wrapperClassName="w-full"
          className="input w-full"
        />
        <p className="label text-red-500"></p>
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Full Name</legend>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="Jhon Doe"
        />
        <p className="label text-red-500"></p>
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Phone Number</legend>
        <input
          type="number"
          name="phone"
          className="input w-full"
          placeholder="083120249216"
        />
        <p className="label text-red-500"></p>
      </fieldset>
      <fieldset className="fieldset">
        <FormStatus title="Reserve" />
      </fieldset>
    </form>
  );
}

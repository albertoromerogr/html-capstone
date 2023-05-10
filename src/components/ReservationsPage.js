import React from "react";
import "./styles/ReservationsContent.css";
import Form from "./Form";
import { fetchAPI } from "../api";
import { useReducer } from "react";

function ReservationsPage() {
  function updateTimes(date) {
    console.log("updateTimes function", date);
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);
  return (
    <div className="res-content-wrapper">
      <div className="res-content-container">
        <div className="text">
          <h2>Experience the perfect balance of tradition and luxury.</h2>
          <p>
            At Little Lemon, we take great pride in providing our customers with
            the greatest luxurious experience with a touch of <em>tradition</em>
            .
          </p>
          <p>Book a table with us to share in this experience.</p>
        </div>
        <div className="form">
          <h1>Reserve a Table</h1>
          <p>
            Please fill in and submit form to book your reservation at Little
            Lemon.
          </p>
          <Form availableTimes={availableTimes} updateTimes={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default ReservationsPage;

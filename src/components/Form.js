import React from "react";
import "./styles/ReservationsContent.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().required("Required").email("Valid mail"),
  telephone: yup.string().required("Required"),
  guests: yup.number().min(1, "Minimum 1").required("Select number of people"),
  date: yup.string().required("Select date and time"),
});

function Form(props) {
  const [date, setDate] = useState("");
  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    e.preventDefault();
    setDate(e.target.value);
    var stringify = e.target.value;
    const date = new Date(stringify);
    console.log("updateTimes call", date);
    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.table(data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <fieldset>
        <div className="field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            name="name"
            {...register("name")}
          />
          <span className="error-message">{errors.name?.message}</span>
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="text@email.com"
            name="email"
            {...register("email")}
          />
          <span className="error-message">{errors.email?.message}</span>
        </div>
        <div className="field">
          <label htmlFor="telephone">Telephone</label>
          <input
            type="tel"
            placeholder="233 00 000 0000"
            name="telephone"
            {...register("telephone")}
          />
          <span className="error-message">{errors.telephone?.message}</span>
        </div>

        <div className="field occasion">
          <label htmlFor="occasion">Occasion (optional)</label>
          <div className="options">
            <select name="occasion" {...register("occasion")}>
              <option value="select">Select occasion</option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
        </div>
        <div className="field guest">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            placeholder="2"
            name="guests"
            {...register("guests")}
          />
          <span className="error-message">{errors.guests?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="date">Date & Time</label>
          <input
            type="date"
            name="datge"
            id="date"
            required
            value={date}
            onChange={handleDateChange}
          ></input>
          {/* <input type="date" name="date" {...register("date")} /> */}
          <span className="error-message">{errors.date?.message}</span>
        </div>
        <div>
          <div className="field">
            <label htmlFor="time">Select Time</label> <br></br>
            <select id="time" required>
              {finalTime}
            </select>
          </div>
        </div>
        <button className="reserve-btn" type="submit">
          Reserve
        </button>
      </fieldset>
    </form>
  );
}

export default Form;

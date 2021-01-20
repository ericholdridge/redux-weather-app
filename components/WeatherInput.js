import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherAction } from "../redux/actions/weatherAction";

const weatherInput = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSearchCity = (e, city) => {
    e.preventDefault();
    dispatch(weatherAction(city));
  };

  return (
    <div>
      <h1>Redux Weather</h1>
      <form onSubmit={(e) => handleSearchCity(e, city)}>
        <input
          type="text"
          placeholder="Search City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>
      <div></div>
    </div>
  );
};

export default weatherInput;

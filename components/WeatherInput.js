import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/actions/fetchWeather";

const weatherInput = () => {
  const [city, setCity] = useState("");
  const weather = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const handleSearchCity = (e, city) => {
    e.preventDefault();
    dispatch(fetchWeather(city));
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
    </div>
  );
};

export default weatherInput;

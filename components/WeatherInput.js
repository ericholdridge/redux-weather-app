import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherAction } from "../redux/actions/weatherAction";
import Container from "./Container";

// Styles
import styles from "../styles/WeatherInput.module.scss";

const weatherInput = () => {
  const weatherState = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const handleSearchCity = (e, city) => {
    e.preventDefault();
    dispatch(weatherAction(city));
    setCity("");
  };

  console.log(weatherState);

  return (
    <div className={styles.weatherInput}>
      <Container>
        <h1>Redux Weather</h1>
        <form onSubmit={(e) => handleSearchCity(e, city)}>
          <input
            type="text"
            placeholder="Search City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </form>
        {weatherState.map((item, index) => (
          <div className={styles.wrapper} key={index}>
            <div className={styles.flex}>
              <div className={styles.div}>
                <span>City: </span>
                <p> {item.location.name}</p>
              </div>
              <div>
                <span>State: </span>
                <p>{item.location.region}</p>
              </div>
              <div>
                <span>Country: </span>
                <p>{item.location.country}</p>
              </div>
            </div>
            <div className="weatherInfo">
              <h3>Weather Info</h3>
              <div>
                <span>Temperature</span>
                <p>{item.current.temp_f}</p>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default weatherInput;

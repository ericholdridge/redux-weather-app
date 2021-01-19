import axios from "axios";
import { FETCH_WEATHER } from "../actions/fetchWeather";

// Initial state
const initState = [];

// Api key
const API_KEY = "6d2ab6b2662647f890605500211901";

const weather = (state = initState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${action.payload}
      `
        )
        .then((res) => {
          return [...initState, { res }];
        });
    default:
      return state;
  }
};

export default weather;

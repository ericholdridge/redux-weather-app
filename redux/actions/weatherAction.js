import Axios from "axios";

export const FETCH_WEATHER = "FETCH_WEATHER";
// Api key
const API_KEY = "6d2ab6b2662647f890605500211901";

export const weatherAction = (city) => {
  return async (dispatch, getState) => {
    const response = await Axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
    );

    dispatch({
      type: FETCH_WEATHER,
      payload: response.data,
    });
  };
};

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (city) => {
  return {
    type: "FETCH_WEATHER",
    payload: city,
  };
};

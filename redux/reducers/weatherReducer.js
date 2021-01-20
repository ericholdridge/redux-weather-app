import { FETCH_WEATHER } from "../actions/weatherAction";
import { initState } from "../states/states";

const weather = (state = initState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload;
    default:
      return state;
  }
};

export default weather;

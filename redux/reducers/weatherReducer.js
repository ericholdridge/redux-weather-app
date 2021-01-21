import { FETCH_WEATHER } from "../actions/weatherAction";
import { initState } from "../states/states";

const weather = (state = initState, action) => {
  let newState;
  switch (action.type) {
    case FETCH_WEATHER:
      newState = [...state];
      newState.push(action.payload);
      return newState;
    default:
      return state;
  }
};

export default weather;

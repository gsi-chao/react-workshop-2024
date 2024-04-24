import { TAction } from "./actions";
import { WeatherState } from "./initialState";

const reducer = (state: WeatherState, action: TAction): WeatherState => {
  const { type } = action;
  switch (type) {
    case "SET_PLACE":
      return { ...state, place: action.payload };
    case "SET_FORECAST":
      return {
        ...state,
        todayForecast: action.payload.length > 0 ? action.payload[0] : null,
        forecast: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;

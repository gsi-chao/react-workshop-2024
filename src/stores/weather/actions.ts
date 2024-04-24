import { Forecast, Places } from "../../core/types/weather";

export type WeatherTypes = "SET_PLACE" | "SET_FORECAST";

type Action<T> = {
  type: WeatherTypes;
  payload: T;
};

interface ISetPlace extends Action<Places> {
  type: "SET_PLACE";
}

interface ISetForecast extends Action<Forecast[]> {
  type: "SET_FORECAST";
}

export type TAction = ISetPlace | ISetForecast;

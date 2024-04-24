"use client";

import { Dispatch, createContext } from "react";
import { TAction } from "./actions";
import { WeatherState, initialState } from "./initialState";

interface IContextProps {
  state: WeatherState;
  dispatch: Dispatch<TAction>;
}
const WeatherContext = createContext<IContextProps>({
  state: initialState,
  dispatch: () => {},
});
export default WeatherContext;

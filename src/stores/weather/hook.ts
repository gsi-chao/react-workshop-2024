"use client";

import { useContext } from "react";
import WeatherContext from "./context";

const useWeatherContext = () => {
  return useContext(WeatherContext);
};

export default useWeatherContext;

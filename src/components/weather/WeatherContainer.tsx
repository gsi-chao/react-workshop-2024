import { useEffect } from "react";
import { getWeatherForecast } from "../../core/services/WeatherForecast";
import { Places } from "../../core/types/weather";
import useWeatherContext from "../../stores/weather/hook";
import WeatherCardContainer from "../card/WeatherCardContainer";
import WeatherToday from "./WeatherToday";

const WeatherContainer = () => {
  const {
    state: { place },
    dispatch,
  } = useWeatherContext();

  useEffect(() => {
    console.log("place", place);
    if (place) {
      getPlaceForecase(place);
    }
  }, [place]);

  const getPlaceForecase = async (_place: Places) => {
    try {
      const data = await getWeatherForecast(_place.name);
      dispatch({ type: "SET_FORECAST", payload: data.list });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <WeatherCardContainer>
      <WeatherToday />
    </WeatherCardContainer>
  );
};

export default WeatherContainer;

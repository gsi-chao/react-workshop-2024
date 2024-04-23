import { __mockForecast } from "../../mock/forecast";
import ForecastList from "./forecast/ForecastList";
import WeatherTemperatureInfo from "./WeatherTemperatureInfo";

const WeatherToday = () => {
  return (
    <div className="flex gap-10 items-center justify-between min-h-40">
      <WeatherTemperatureInfo
        feelsLike={132}
        temp={132}
        maxTemp={132}
        minTemp={132}
      />
      <ForecastList forecasts={__mockForecast} />
    </div>
  );
};

export default WeatherToday;

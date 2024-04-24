import useWeatherContext from "../../stores/weather/hook";
import ForecastList from "./forecast/ForecastList";
import WeatherTemperatureInfo from "./WeatherTemperatureInfo";

const WeatherToday = () => {
  const {
    state: { forecast, todayForecast },
  } = useWeatherContext();

  return (
    <div className="flex gap-10 items-center justify-between min-h-40">
      {todayForecast && (
        <WeatherTemperatureInfo
          feelsLike={todayForecast.main.feels_like}
          temp={todayForecast.main.temp}
          maxTemp={todayForecast.main.temp_max}
          minTemp={todayForecast.main.temp_min}
        />
      )}

      <ForecastList forecasts={forecast} />
    </div>
  );
};

export default WeatherToday;

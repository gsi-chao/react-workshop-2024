import { Forecast } from "../../../core/types/weather";
import WeatherIcon from "../WeatherIcon";
import ForecastItem from "./ForecastItem";

type Props = {
  forecasts: Forecast[];
};

const ForecastList: React.FC<Props> = ({ forecasts }) => {
  const getIcon = (forecast: Forecast) => {
    let icon = "01d";
    if (forecast.weather.length > 0) {
      icon = forecast.weather[0].icon;
    }
    return icon;
  };

  const getTime = (dt: number) => {
    const date = new Date(dt * 1000);
    return date.getUTCHours();
  };
  return (
    <div className="w-full overflow-x-auto flex gap-10">
      {forecasts.map((forecast, index) => (
        <ForecastItem
          key={index}
          icon={<WeatherIcon iconName={getIcon(forecast)} />}
          temp={forecast.main.temp}
          time={String(getTime(forecast.dt))}
        />
      ))}
    </div>
  );
};

export default ForecastList;

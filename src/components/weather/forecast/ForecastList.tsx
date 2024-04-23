import { Forecast } from "../../../core/types/weather";
import WeatherIcon from "../WeatherIcon";
import ForecastItem from "./ForecastItem";

type Props = {
  forecasts: Forecast[];
};

const ForecastList: React.FC<Props> = ({ forecasts }) => {
  return (
    <div className="w-full overflow-x-auto flex gap-10">
      {forecasts.map((forecast, index) => (
        <ForecastItem
          key={index}
          icon={<WeatherIcon iconName={forecast.icon} />}
          temp={forecast.temp}
          time={forecast.time}
        />
      ))}
    </div>
  );
};

export default ForecastList;

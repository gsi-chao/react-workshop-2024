import WeatherCelciusFormat from "./WeatherCelciusFormat";
import WeatherMinMaxTemperature from "./WeatherMinMaxTemperature";

type Props = {
  temp: number;
  feelsLike: number;
  minTemp: number;
  maxTemp: number;
};

const WeatherTemperatureInfo: React.FC<Props> = ({
  temp,
  feelsLike,
  minTemp,
  maxTemp,
}) => {
  return (
    <div className="flex flex-col justify-center items-center px-2">
      <WeatherCelciusFormat temp={temp} className="text-5xl" />
      <div className="flex gap-1">
        <span className="text-xs">Feels like</span>
        <WeatherCelciusFormat temp={feelsLike} className="text-xs" />
      </div>
      <WeatherMinMaxTemperature min={minTemp} max={maxTemp} className="text-xs"/>
    </div>
  );
};

export default WeatherTemperatureInfo;

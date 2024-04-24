import {
  kelvinToCelsius
} from "../../core/utils/temperature";

const WeatherKelvinFormat = ({
  temp,
  className,
}: {
  temp: number;
  className: string;
}) => {
  return (
    <span className={className}>{Math.floor(kelvinToCelsius(temp))}°</span>
  );
};

export default WeatherKelvinFormat;

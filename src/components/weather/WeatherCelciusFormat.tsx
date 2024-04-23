import { faranheitToCelsius } from "../../core/utils/temperature";

const WeatherCelciusFormat = ({
  temp,
  className,
}: {
  temp: number;
  className: string;
}) => {
  return (
    <span className={className}>{Math.floor(faranheitToCelsius(temp))}°</span>
  );
};

export default WeatherCelciusFormat;

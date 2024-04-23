import WeatherCelciusFormat from "../WeatherCelciusFormat";

type Props = {
  time: string;
  icon: React.ReactElement;
  temp: number;
};

const ForecastItem: React.FC<Props> = ({ icon, time, temp }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 text-xs font-semibold">
      <span>{time}</span>
      {icon}
      <WeatherCelciusFormat temp={temp} className="" />
    </div>
  );
};

export default ForecastItem;

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

import { cn } from "../../core/utils/class";
import WeatherCelciusFormat from "./WeatherCelciusFormat";

type Props = {
  min: number;
  max: number;
  className?: string;
  minClassName?: string;
  maxClassName?: string;
};

const WeatherMinMaxTemperature: React.FC<Props> = ({
  min,
  max,
  className,
  maxClassName,
  minClassName,
}) => {
  return (
    <div className="flex space-x-2 justify-between">
      <div className="flex items-center">
        <WeatherCelciusFormat
          className={cn(className, minClassName)}
          temp={min}
        />
        <ArrowDownIcon className="h-3 w-3" />
      </div>
      <div className="flex items-center">
        <WeatherCelciusFormat
          className={cn(className, maxClassName)}
          temp={max}
        />
        <ArrowUpIcon className="h-3 w-3" />
      </div>
    </div>
  );
};

export default WeatherMinMaxTemperature;

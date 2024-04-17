import { PlacesResponse } from "../types/weather";

export const getWeatherForecast = async (city: string): Promise<unknown> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
    }`
  );
  const data = await response.json();
  return {
    city: data.name,
    temperature: data.main.temp,
    weather: data.weather[0].main,
  };
};

export const findPlaces = async (query: string): Promise<PlacesResponse> => {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/find?q=${query}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
    }`
  );
  const data = await resp.json();
  return data;
};

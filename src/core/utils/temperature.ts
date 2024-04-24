export const faranheitToCelsius = (temp: number) => {
  return ((temp - 32) * 5) / 9;
};

export const kelvinToCelsius = (temp: number) => {
  return temp - 273.15;
}

import WeatherCardContainer from "./components/card/WeatherCardContainer";
import WeatherToday from "./components/weather/WeatherToday";
import RootLayout from "./template/Layout";

function App() {
  return (
    <RootLayout>
      <WeatherCardContainer>
        <WeatherToday />
      </WeatherCardContainer>
    </RootLayout>
  );
}

export default App;

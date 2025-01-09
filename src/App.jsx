import { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import './App.css';

const API_KEY = "ea1f485da576c4bb7e4502e322cbd083";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("No hemos encontrado la ciudad indicada");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  return (
    <div class="contenedor"> 
      <div>
        <h1>¿Qué tiempo tenemos hoy?</h1>
      </div>
      <div>
        <WeatherSearch onSearch={fetchWeather} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <WeatherDisplay weatherData={weatherData} />
      </div>      
    </div>
  );
}

export default App;

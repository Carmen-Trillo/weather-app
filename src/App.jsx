import { useState } from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import FavoriteCities from "./components/FavoriteCities";
import TemperatureUnitSelector from "./components/TemperatureUnitSelector";
import './App.css';

const API_KEY = "ea1f485da576c4bb7e4502e322cbd083";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState("metric"); // Celsius por defecto

  const fetchWeather = async (city) => {
    try {
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Ciudad no encontrada");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setWeatherData(null);
      setError(err.message);
    }
  };

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  const removeFavorite = (city) => {
    setFavorites(favorites.filter(fav => fav !== city));
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
  };

  return (
    <div className="contenedor">
      <h1>¿Qué tiempo hace hoy</h1>
      <WeatherSearch onSearch={fetchWeather} />
      <TemperatureUnitSelector onChangeUnit={handleUnitChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="subcontenedor">
        <div id="busqueda">
          <WeatherDisplay weatherData={weatherData} unit={unit} />
        </div>
        <div id="favoritas">
          <FavoriteCities favorites={favorites} onRemoveFavorite={removeFavorite} />
          <button onClick={() => addFavorite(weatherData?.name)}>Añadir a Favoritas</button>
          </div>
      
      </div>
    </div>
  );
}

export default App;
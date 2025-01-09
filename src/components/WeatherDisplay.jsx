function WeatherDisplay({ weatherData }) {
    if (!weatherData) return null;
  
    const { name, main, weather } = weatherData;
  
    return (
      <div>
        <h2>{name}</h2>
        <p>{Math.round(main.temp)}°C</p>
        <p>{weather[0].description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
      </div>
    );
  }
  
  export default WeatherDisplay;
  
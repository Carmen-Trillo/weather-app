function WeatherDisplay({ weatherData, unit }) {
  if (!weatherData) return null;

  const { name, main, weather } = weatherData;
  const temp = unit === "metric" ? Math.round(main.temp) : Math.round(main.temp * 9/5 + 32);

  return (
    <div>
      <h2>{name}</h2>
      <p>{temp}° {unit === "metric" ? "C" : "F"}</p>
      <p>{weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
    </div>
  );
}

export default WeatherDisplay;
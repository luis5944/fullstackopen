import React from "react";

const Weather = ({ country, weather }) => {
  return (
    <div>
      <img src={country.flag} alt={country.name} width="100px" />
      <h2>{`Weather in ${country.capital}`}</h2>
      <p>{`temperature: ${weather.temperature} Celcius`}</p>
      <img src={weather.weather_icons[0]} alt="" />
      <p>{`wind: ${weather.wind_speed} mph direction ${weather.wind_dir}`} </p>
    </div>
  );
};

export default Weather;

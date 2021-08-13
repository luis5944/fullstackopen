import axios from "axios";
import React, { useEffect, useState } from "react";
import Weather from "./Weather";

const Country = ({ country }) => {
  const [weather, setWeather] = useState();
  useEffect(() => {
    axios(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_SECRET}&query=${country.capital}`
    ).then((response) => {
      setWeather(response.data.current);
    });
  }, [country.capital]);

  return (
    <div>
      <h1>{country.name}</h1>
      <p>{`capital ${country.capital}`}</p>
      <p>{`population ${country.population}`}</p>
      <h2>languages</h2>
      {country.languages.map((language) => (
        <li key={language.name}>{language.name}</li>
      ))}
      {weather ? <Weather country={country} weather={weather} /> : null}
    </div>
  );
};

export default Country;

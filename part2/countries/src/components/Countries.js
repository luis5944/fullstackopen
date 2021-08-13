
import React, { useState } from "react";
import Country from "./Country";

const Countries = ({ countries }) => {
  const [show, setShow] = useState("");

  return (
    <div>
      {countries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : countries.length === 1 ? (
        <Country country={countries[0]} />
      ) : (
        <ul>
          {countries.map((c) => (
            <div key={c.name}>
              <p>
                {c.name}{" "}
                <button
                  value={c.name}
                  onClick={() => {
                    setShow(c);
                  }}
                >
                  show
                </button>
              </p>
            </div>
          ))}
        </ul>
      )}

      {show ? (
        <div>
          <h1>{show.name}</h1>
          <p>{`capital ${show.capital}`}</p>
          <p>{`population ${show.population}`}</p>
          <h2>languages</h2>
          {show.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
          <img src={show.flag} alt={show.name} width="100px" />
          <button onClick={() => setShow(null)}>Close</button>
        </div>
      ) : null}
    </div>
  );
};

export default Countries;

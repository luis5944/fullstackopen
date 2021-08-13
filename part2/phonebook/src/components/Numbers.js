import React from "react";
import phones from "../services/phones";

const Numbers = ({ persons, search, setPersons }) => {
  const personsToShow = !search
    ? persons
    : persons.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );

  const handleDelete = (p) => {
    if (window.confirm(`Delete ${p.name}?`)) {
      phones.deletePhone(p.id);
      setPersons(persons.filter((pe) => pe.id !== p.id));
    }
  };

  return (
    <div>
      <h2>Numbers</h2>
      {personsToShow.map((p) => (
        <div key={p.id}>
          <p>
            {`${p.name} - ${p.number}`}{" "}
            <button onClick={()=> handleDelete(p)}>delete</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Numbers;

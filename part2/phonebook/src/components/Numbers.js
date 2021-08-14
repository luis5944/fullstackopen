import React from "react";
import phones from "../services/phones";

const Numbers = ({ persons, search, setPersons, setNotification }) => {
  const personsToShow = !search
    ? persons
    : persons.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );

  const handleDelete = (p) => {
    if (window.confirm(`Delete ${p.name}?`)) {
      phones.getById(p.id).catch((error) => handleErrorDelete(p));
      phones.deletePhone(p.id);

      setPersons(persons.filter((pe) => pe.id !== p.id));
    }
  };

  const handleErrorDelete = (p) => {
    setNotification({
      message: `Information of ${p.name} has already been remmoved from server`,
      type: "error",
    });
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  return (
    <div>
      <h2>Numbers</h2>
      {personsToShow.map((p) => (
        <div key={p.id}>
          <p>
            {`${p.name} - ${p.number}`}{" "}
            <button onClick={() => handleDelete(p)}>delete</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Numbers;

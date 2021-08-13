import React from "react";

const Numbers = ({ persons, search }) => {
  const personsToShow = !search
    ? persons
    : persons.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <div>
      <h2>Numbers</h2>
      {personsToShow.map((p) => (
        <p key={p.id}>{`${p.name} - ${p.number}`}</p>
      ))}
    </div>
  );
};

export default Numbers;

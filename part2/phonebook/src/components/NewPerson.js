import React, { useState } from "react";
import phones from "../services/phones";

const NewPerson = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const repeat = persons.find((p) => p.name === newName);
    if (repeat) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        phones
          .updatePhone(repeat.id, { name: repeat.name, number: newNumber })
          .then((response) => {
            setPersons(
              persons.map((p) => (p.id !== repeat.id ? p : response.data))
            );
          });
      }

      return;
    }
    phones
      .createPhone({ name: newName, number: newNumber })
      .then((response) => {
        setPersons([...persons, response.data]);
      });
  };

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };
  const handleChangePhone = (e) => {
    setNewNumber(e.target.value);
  };
  return (
    <>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangePhone} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPerson;

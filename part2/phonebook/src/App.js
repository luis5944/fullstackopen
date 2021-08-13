import axios from "axios";
import React, { useEffect, useState } from "react";
import NewPerson from "./components/NewPerson";
import Numbers from "./components/Numbers";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios("http://localhost:3001/persons").then((response) =>
      setPersons(response.data)
    );
  }, []);

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <NewPerson persons={persons} setPersons={setPersons} />
      <Numbers persons={persons} search={search} />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import NewPerson from "./components/NewPerson";
import Numbers from "./components/Numbers";
import Search from "./components/Search";
import phoneService from "./services/phones.js";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    phoneService.getAll().then((response) => setPersons(response.data));
  }, []);

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <NewPerson persons={persons} setPersons={setPersons} />
      <Numbers persons={persons} search={search} setPersons={setPersons}/>
    </div>
  );
};

export default App;

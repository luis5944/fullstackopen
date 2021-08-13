import axios from "axios";
import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Form from "./components/Form";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios("https://restcountries.eu/rest/v2/all").then((response) => {
      if (search.length > 0) {
        setCountries(
          response.data.filter((c) =>
            c.name.toLowerCase().includes(search.toLowerCase())
          )
        );
      }
    });
  }, [search.length, search]);

  return (
    <div>
      <Form search={search} setSearch={setSearch} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;

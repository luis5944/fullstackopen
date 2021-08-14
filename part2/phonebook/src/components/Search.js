import React from "react";
import Notification from "./Notification";

const Search = ({ search, setSearch, notification }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      {notification ? <Notification notification={notification}/> : null}

      <div>
        filter show with: <input value={search} onChange={handleSearch} />
      </div>
    </div>
  );
};

export default Search;

import React from "react";

const Search = ({ search, setSearch }) => {

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter show with: <input value={search} onChange={handleSearch} />
      </div>
    </div>
  );
};

export default Search;

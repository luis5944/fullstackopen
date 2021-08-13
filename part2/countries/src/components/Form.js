import React from "react";

const Form = ({ search, setSearch }) => {
  return (
    <form>
      <label>find countries: </label>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          e.preventDefault();
          setSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default Form;

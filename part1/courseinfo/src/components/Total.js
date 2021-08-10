import React from "react";

const Total = ({ parts }) => {
  const total = parts
    .map((p) => p.exercises)
    .reduce((acc, curren) => acc + curren);
  return <p>Number of exercises {total}</p>;
};

export default Total;

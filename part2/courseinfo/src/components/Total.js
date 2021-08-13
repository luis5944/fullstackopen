import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((acc, curren) => acc + curren.exercises, 0);
  return <p>Total of exercises {total}</p>;
};

export default Total;

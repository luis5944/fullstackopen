import React from "react";

const StatisticsLine = ({ text, value }) => {
  return <td>{`${text} ${value}`}</td>;
};

export default StatisticsLine;

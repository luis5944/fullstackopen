import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <div>
      {parts.map((p) => (
        <Part part={p.name} exercise={p.exercises} />
      ))}
    </div>
  );
};

export default Content;

import React from "react";

const Button = ({ func, children }) => {
  return (
    <button
      onClick={() => {
        func((u) => u + 1);
      }}
    >
      {children}
    </button>
  );
};

export default Button;

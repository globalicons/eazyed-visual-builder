// components/user/Button.js
import React from "react";

export const Button = ({ size, children }) => {
  return (
    <button
      style={{
        padding: size === "small" ? "10px" : "20px",
        fontSize: size === "small" ? "14px" : "16px",
      }}
    >
      {children}
    </button>
  );
};

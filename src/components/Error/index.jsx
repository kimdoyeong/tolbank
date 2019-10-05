import React from "react";

const ErrorComponent = ({ error }) => {
  if (!error) return null;
  return (
    <div
      style={{
        background: "#f5c9c9",
        padding: "1em",
        borderRadius: "5px",
        color: "#b82c2c",
        boxShadow: "0 2px 5px rgba(255,0,0,0.3)"
      }}
    >
      <strong>Error!</strong> {error}
    </div>
  );
};

export default ErrorComponent;

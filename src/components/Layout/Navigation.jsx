import React from "react";
import NavigationIcon from "./NavigationIcon";

const Navigation = () => (
  <nav
    style={{
      display: "flex",
      background: "linear-gradient(to bottom,#ece8ff 80%, #d4cef2)",
      boxShadow: "0 5px 5px rgba(142, 122, 255, 0.1)"
    }}
  >
    <div
      style={{
        padding: "1em",
        cursor: "pointer"
      }}
      role="button"
    >
      <NavigationIcon />
    </div>
  </nav>
);

export default Navigation;

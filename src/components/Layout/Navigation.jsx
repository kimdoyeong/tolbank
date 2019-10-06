import React from "react";
import NavigationIcon from "./NavigationIcon";
import Menu from "./Menu";
import NotLoginRedirect from "../NotLoginRedirect";

const Navigation = () => {
  const state = React.useState(false);

  return (
    <nav
      style={{
        display: "flex",
        background: "linear-gradient(to bottom,#ece8ff 80%, #d4cef2)",
        boxShadow: "0 5px 5px rgba(142, 122, 255, 0.1)"
      }}
    >
      <NotLoginRedirect />

      <div
        style={{
          padding: "1em",
          cursor: "pointer"
        }}
        role="button"
        onClick={() => {
          state[1](true);
        }}
      >
        <NavigationIcon />
      </div>
      <Menu state={state} />
    </nav>
  );
};

export default Navigation;

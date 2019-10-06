import React from "react";
import style from "./index.module.css";

const Header = ({ children }) => {
  return <header className={style.wrap}>{children}</header>;
};

export default Header;

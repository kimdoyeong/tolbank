import React from "react";
import style from "./NavigationIcon.module.css";

const NavigationIcon = () => (
  <svg
    viewBox="0 0 70 50"
    width="50"
    xmlns="http://www.w3.org/2000/svg"
    className={style.icon}
  >
    <rect width="70" height="10" x="0" y="0" rx="3"></rect>
    <rect width="70" height="10" x="0" y="20" rx="3"></rect>
    <rect width="70" height="10" x="0" y="40" rx="3"></rect>
  </svg>
);

export default NavigationIcon;

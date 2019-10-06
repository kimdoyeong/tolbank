import React from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.css";

const Button = ({ children, fit, to, ...props }) => {
  const Tag = to ? Link : "button";
  return (
    <Tag
      className={[style.button, fit && style.fit, props.className]
        .filter(Boolean)
        .join(" ")}
      to={to}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;

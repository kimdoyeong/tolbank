import React from "react";
import style from "./Button.module.css";

const Button = ({ children, fit, ...props }) => {
  return (
    <button
      className={[style.button, fit && style.fit, props.className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

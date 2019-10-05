import React from "react";
import style from "./Input.module.css";
const Input = ({ className, inputName, ...props }) => {
  const inputJsx = (
    <input
      className={[style.input, className].filter(Boolean).join(" ")}
      {...props}
    ></input>
  );
  return (
    <label className={style.wrap}>
      {inputName && <div className={style.inputName}>{inputName}</div>}
      {inputJsx}
    </label>
  );
};

export default Input;

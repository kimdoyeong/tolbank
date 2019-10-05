import React from "react";
import style from "./Menu.module.css";
import useLoginData from "../../lib/useLoginData";

const Menu = ({ state: [opened, setOpen] }) => {
  const logined = useLoginData();

  if (!opened) return null;
  if (!logined) return null;

  const { username } = logined;

  function close() {
    setOpen(false);
  }
  return (
    <div className={style.wrap}>
      <div className={style.background} onClick={close} />
      <div className={style.contents}>
        <h1>Hello, {username}</h1>
      </div>
    </div>
  );
};
export default Menu;

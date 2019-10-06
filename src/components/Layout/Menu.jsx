import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";
import { Motion, spring } from "react-motion";
import useLoginData from "../../lib/useLoginData";
import { logout } from "../../store/auth";

const Menu = ({ state: [opened, setOpen] }) => {
  const logined = useLoginData();
  const [toClose, setToClose] = useState(false);
  const dispatch = useDispatch();

  if (!opened) return null;
  if (!logined) return null;

  const { username } = logined;

  function logoutClicked() {
    dispatch(logout());
  }

  function close() {
    setToClose(true);
  }
  const jsx = ({ opacity, y }) => (
    <div className={style.wrap} style={{ opacity }}>
      <div className={style.background} onClick={close} />
      <div
        className={style.contents}
        style={{ transform: `translateY(${y}px)` }}
      >
        <h1>Hello, {username}</h1>
        <div>
          <MenuItem to="/drive">드라이브</MenuItem>
          <MenuItem to="/transmission">트랜스미션</MenuItem>
          <MenuItem to="/price">가격 정책</MenuItem>
          <MenuItem onClick={logoutClicked}>로그아웃</MenuItem>
        </div>
      </div>
    </div>
  );

  return (
    <Motion
      defaultStyle={{
        opacity: 0,
        y: -100
      }}
      style={{
        opacity: spring(!toClose ? 1 : 0),
        y: spring(0)
      }}
      onRest={() => {
        if (toClose) {
          setOpen(false);
          setToClose(false);
        }
      }}
    >
      {jsx}
    </Motion>
  );
};

function MenuItem({ children, onClick, to }) {
  const Tag = to ? Link : "div";
  return (
    <Tag className={style.menuItem} onClick={onClick} role="button" to={to}>
      {children}
    </Tag>
  );
}
export default Menu;

import React from "react";
import style from "./index.module.css";

function formatTime(time) {
  const h = Math.floor(time / (60 * 60));
  const m = Math.floor(time / 60) - h * 60;
  const s = Math.floor(time) - m * 60 - h * 60 * 60;

  function i(d) {
    if (d < 10) return "0" + d;
    return "" + d;
  }
  return `${i(h)}:${i(m)}:${i(s)}`;
}
const Video = ({ src }) => {
  return (
    <div className={style.wrap}>
      <video src={src} className={style.video} controls />
    </div>
  );
};

export default Video;

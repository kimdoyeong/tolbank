import React from "react";
import style from "./index.module.css";

const Video = ({ src }) => {
  return (
    <div className={style.wrap}>
      <video src={src} className={style.video} controls />
    </div>
  );
};

export default Video;

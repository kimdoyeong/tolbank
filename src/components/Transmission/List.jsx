import React from "react";
import style from "./index.module.css";

const TransmissionList = ({ name, progress }) => {
  return (
    <div className={style.item}>
      {name}
      <div className={style.listProgressWrap}>
        <div
          className={[style.listProgress, progress >= 100 && style.complete]
            .filter(Boolean)
            .join(" ")}
          style={{
            width: `${progress}%`
          }}
        ></div>
      </div>
    </div>
  );
};

export default TransmissionList;

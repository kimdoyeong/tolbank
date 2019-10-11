import React, { useMemo } from "react";
import style from "./index.module.css";
import fileSize from "../../lib/fileSize";

const TransmissionList = ({ name, progress, totalSize, rateDownload }) => {
  const size = useMemo(() => fileSize(totalSize), [totalSize]);
  const downloadSpeed = useMemo(() => fileSize(rateDownload), [rateDownload]);
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
        <div className={style.progress}>
          {progress.toFixed(2)}%, {size}, {downloadSpeed}/s
        </div>
      </div>
    </div>
  );
};

export default TransmissionList;

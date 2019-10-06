import React from "react";
import { useSelector } from "react-redux";
import getViewLink from "../../lib/api/getViewLink";
import style from "./VideoViewer.module.css";
import Video from "../Video";
const VideoViewer = () => {
  const { token } = useSelector(state => state.view);
  return (
    <div className={style.wrap}>
      <Video src={getViewLink(token)}></Video>
    </div>
  );
};

export default VideoViewer;

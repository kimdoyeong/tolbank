import React from "react";
import { useSelector } from "react-redux";
import getViewLink from "../../lib/api/getViewLink";

const ImageViewer = () => {
  const { token } = useSelector(state => state.view);
  return (
    <div
      style={{
        padding: "1em",
        textAlign: "center"
      }}
    >
      <img
        style={{
          maxWidth: "100%"
        }}
        src={getViewLink(token)}
      ></img>
    </div>
  );
};

export default ImageViewer;

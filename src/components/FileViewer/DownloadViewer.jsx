import React from "react";
import Button from "../Form/Button";
import getViewLink from "../../lib/api/getViewLink";
const DownloadViewer = ({ token, slug }) => {
  return (
    <div style={{ padding: "1em" }}>
      <a href={getViewLink(token)} download={slug.replace(/^.*\/(.+?)$/, "$1")}>
        <Button>다운로드</Button>
      </a>
    </div>
  );
};

export default DownloadViewer;

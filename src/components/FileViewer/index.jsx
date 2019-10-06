import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header";
import { fileView } from "../../store/view";
import ErrorComponent from "../Error";
import DownloadViewer from "./DownloadViewer";
import TextViewer from "./TextViewer";
import mimeTypes from "mime-types";
import VideoViewer from "./VideoViewer";
import ImageViewer from "./ImageViewer";

const FileViewer = ({ slug }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fileView({ path: slug }));
  }, [slug, dispatch]);
  const { error, success, token } = useSelector(action => action.view);
  if (!success) {
    return <div>로드 중...</div>;
  }
  const downloader = <DownloadViewer token={token} slug={slug} />;
  let viewer = downloader;
  const type = mimeTypes.contentType(slug);
  if (type.match(/^text/)) {
    viewer = (
      <div>
        <TextViewer />
        {downloader}
      </div>
    );
  } else if (type.match(/^video/)) {
    viewer = (
      <div>
        <VideoViewer />
        {downloader}
      </div>
    );
  } else if (type.match(/^image\//)) {
    viewer = (
      <div>
        <ImageViewer />
        {downloader}
      </div>
    );
  }
  return (
    <div>
      <Header>
        <h2 style={{ margin: 0, wordBreak: "break-all" }}>{slug}</h2>
      </Header>
      <ErrorComponent error={error} />
      <div>{viewer}</div>
    </div>
  );
};

export default FileViewer;

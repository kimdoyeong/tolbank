import React from "react";
import { Link } from "react-router-dom";
import style from "./FileItem.module.css";

const FileItem = ({ type = "file", filename, slug }) => {
  const to =
    type === "folder" ? "/drive" + encodeURI(slug) : "/file" + encodeURI(slug);
  return (
    <Link className={style.item} onClick={onclick} to={to}>
      <div className={style.image}>
        {type === "file" ? <FileIcon /> : <FolderIcon />}
      </div>
      <div className={style.contents}>
        <h3>{filename}</h3>
      </div>
      <div className={style.more}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 50">
          <rect x="0" y="0" width="10" height="10" rx="5" />
          <rect x="0" y="20" width="10" height="10" rx="5" />
          <rect x="0" y="40" width="10" height="10" rx="5" />
        </svg>
      </div>
    </Link>
  );
};

function FolderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 30 30">
      <g>
        <path
          style={{ fill: "#AF9C4A" }}
          d="M22.5,11.3h-5c-0.6,0-1-0.5-1-1v-1c0-0.6,0.5-1,1-1h5c0.6,0,1,0.5,1,1v1C23.5,10.8,23,11.3,22.5,11.3z"
        />
        <path
          style={{ fill: "#F4DB62" }}
          d="M23.3,21.8H6.7C5.8,21.8,5,21,5,20v-8.5c0-1,0.8-1.7,1.7-1.7h16.5c1,0,1.7,0.8,1.7,1.7V20   C25,21,24.2,21.8,23.3,21.8z"
        />
      </g>
    </svg>
  );
}

function FileIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <polygon
        style={{
          fill: "#E6E6E6"
        }}
        points="18.7,5.4 21.5,5.4 21.5,5.4 8.5,5.4 8.5,24.6 21.5,24.6 21.5,8.2 "
      />
      <polygon
        style={{ fill: "#CCCCCC" }}
        points="21.5,8.2 18.7,8.2 18.7,5.4 "
      />
    </svg>
  );
}

export default FileItem;

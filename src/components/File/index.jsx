import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./index.module.css";
import FileItem from "./FileItem";
import { fileSearch } from "../../store/file";
import ErrorComponent from "../Error";

const File = ({ slug }) => {
  const { path, data, error } = useSelector(state => state.file);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fileSearch(slug || "/"));
  }, [slug, dispatch]);
  return (
    <div>
      <header className={style.header}>
        <h1>{path}</h1>
      </header>
      <ErrorComponent error={error} />
      <div className={style.files}>
        {data && data.map((props, i) => <FileItem key={i} {...props} />)}
      </div>
    </div>
  );
};
export default File;

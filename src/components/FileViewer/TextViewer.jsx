import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileGetData } from "../../store/view";

const TextViewer = () => {
  const { token, data } = useSelector(action => action.view);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fileGetData({ token }));
  }, [token, dispatch]);
  return (
    <div style={{ padding: "1em" }}>
      <h1>파일 내용</h1>
      <code>{data}</code>
    </div>
  );
};
export default TextViewer;

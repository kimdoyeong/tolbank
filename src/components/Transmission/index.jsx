import React, { useEffect } from "react";
import style from "./index.module.css";
import TransmissionList from "./List";
import { useSelector, useDispatch } from "react-redux";
import { getTransmission } from "../../store/transmission";
import ErrorComponent from "../Error";

const Transmission = () => {
  const { success, error, data } = useSelector(state => state.transmission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransmission());
    setInterval(() => {
      dispatch(getTransmission());
    }, 1000);
  }, [dispatch]);
  if (error) return <ErrorComponent error={error} />;
  if (!success) return <div>로딩 중...</div>;

  return (
    <div className={style.wrap}>
      <h1>Transmission</h1>
      <div className={style.list}>
        {/*<TransmissionList name="1" progress={45}></TransmissionList>*/}
        {data.torrents.map(d => (
          <TransmissionList
            name={d.name}
            progress={d.percentDone * 100}
            key={d.hashString}
            totalSize={d.totalSize}
            rateDownload={d.rateDownload}
          />
        ))}
      </div>
    </div>
  );
};

export default Transmission;

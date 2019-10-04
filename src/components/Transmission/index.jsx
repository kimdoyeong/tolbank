import React from "react";
import style from "./index.module.css";
import TransmissionList from "./List";

const Transmission = () => (
  <div className={style.wrap}>
    <h1>Transmission</h1>
    <div className={style.list}>
      <TransmissionList name="1" progress={45}></TransmissionList>
      <TransmissionList name="2" progress={100}></TransmissionList>
    </div>
  </div>
);

export default Transmission;

import React from "react";
import SEO from "../components/Layout/SEO";

import style from "../styles/pages/index.module.css";

const IndexPage = () => (
  <div className={style.wrap}>
    <SEO title="메인" />
    <div className={style.contents}>
      <h1>Log In</h1>
    </div>
  </div>
);

export default IndexPage;

import React from "react";
import style from "./index.module.css";
import Navigation from "./Navigation";

const Layout = ({ children }) => (
  <div className={style.wrap}>
    <header>
      <Navigation />
    </header>
    <main className={style.main}>{children}</main>
    <footer className={style.footer}>
      Copyrightⓒ{new Date().getFullYear()} Doyeong Kim. All rights reserved.
    </footer>
  </div>
);

export default Layout;

import React from "react";
import style from "./index.module.css";
import Navigation from "./Navigation";

const Layout = ({ children }) => (
  <>
    <header>
      <Navigation />
    </header>
    <main>{children}</main>
    <footer className={style.footer}>
      Copyrightⓒ{new Date().getFullYear()} Doyeong Kim. All rights reserved.
    </footer>
  </>
);

export default Layout;

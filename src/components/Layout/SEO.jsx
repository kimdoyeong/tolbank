import React from "react";
import Helmet from "react-helmet";

const SEO = ({ title }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title ? title + " - Tolbank" : "Tolbank"}</title>
  </Helmet>
);

export default SEO;

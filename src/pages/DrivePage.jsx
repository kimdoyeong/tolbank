import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Layout/SEO";
import Transmission from "../components/Transmission";
import NotLoginRedirect from "../components/NotLoginRedirect";

const DrivePage = () => {
  return (
    <Layout>
      <NotLoginRedirect />
      <SEO title="Drive" />
      <Transmission />
    </Layout>
  );
};

export default DrivePage;

import React from "react";
import { withRouter } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/Layout/SEO";
import File from "../components/File";

const DrivePage = ({ location: { pathname } }) => {
  const slug = pathname.replace(/^\/drive/, "");
  return (
    <Layout>
      <SEO title={slug || "/"} />
      <File slug={slug} />
    </Layout>
  );
};

export default withRouter(DrivePage);

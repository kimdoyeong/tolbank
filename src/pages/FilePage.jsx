import React from "react";
import { withRouter } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/Layout/SEO";
import FileViewer from "../components/FileViewer";
const FilePage = ({ match: { params } }) => {
  const slug = params[0].replace(/\\/g, "/");
  const file = slug.replace(/^.+\/(.+?)$/, "$1");
  return (
    <Layout>
      <SEO title={file} />
      <FileViewer slug={slug} />
    </Layout>
  );
};

export default withRouter(FilePage);

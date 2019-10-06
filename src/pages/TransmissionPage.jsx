import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Layout/SEO";
import Transmission from "../components/Transmission";
const TransmissionPage = () => {
  return (
    <Layout>
      <SEO title="트랜스미션" />
      <Transmission />
    </Layout>
  );
};
export default TransmissionPage;

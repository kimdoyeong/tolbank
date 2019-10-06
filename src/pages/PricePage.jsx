import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Layout/SEO";
import Header from "../components/Header";
import style from "../styles/pages/price.module.css";

const PricePage = () => {
  return (
    <Layout>
      <SEO title="가격 정책" />
      <Header>
        <h1>가격 정책</h1>
      </Header>
      <main className={style.main}>
        <p>아직 판매하지 않습니다.</p>
        <div className={style.cardlist}>
          <Card
            cardName="Free"
            features={["10GB 용량 제공", "드라이브 시스템 제공"]}
          />
          <Card
            cardName="3,000원"
            features={["30GB 용량 제공", "드라이브 시스템 제공"]}
          />
          <Card
            cardName="9,900원"
            features={[
              "100GB 용량 제공",
              "드라이브 시스템 제공",
              "트랜스미션 제공"
            ]}
          />
        </div>
      </main>
    </Layout>
  );
};
function Card({ cardName, features }) {
  return (
    <div className={style.card}>
      <h1>{cardName}</h1>
      <ul>
        {features.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
}

export default PricePage;

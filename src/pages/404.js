import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import layoutStyles from "../styles/layout.module.css";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Sidan saknas" />
    <h1 className={layoutStyles.pageTitle}>Oops, den här sidan saknas</h1>
    <p className={layoutStyles.notFoundText}>
      Jag vet inte vad som hände där ¯\_(ツ)_/¯
    </p>
  </Layout>
);

export default NotFoundPage;

import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import layoutStyles from "../styles/layout.module.css";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Page not found" />
    <h1 className={layoutStyles.pageTitle}>Oops, this page is missing</h1>
    <p className={layoutStyles.notFoundText}>
      I'm not sure what happened there ¯\_(ツ)_/¯
    </p>
  </Layout>
);

export default NotFoundPage;

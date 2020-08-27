import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import layoutStyles from "../styles/layout.module.css";
import FigmaIcon from "../icons/figma-icon.svg";
import GatsbyIcon from "../icons/gatsby-icon.svg";
import DigitalOceanIcon from "../icons/digital-ocean-icon.svg";
import styles from "../styles/how.module.css";

const HowIBuiltThisPage = () => {
  return (
    <Layout mainClassName={styles.container}>
      <SEO title="How I built this" />
      <h1 className={`${layoutStyles.pageTitle} ${styles.title}`}>
        How I{" "}
        <span
          style={{
            fontFamily: "monospace",
            fontWeight: "500",
            color: "#FBC539",
            fontSize: "0.7em",
          }}
        >
          {"<built/>"}
        </span>{" "}
        This
      </h1>
      <section className={styles.highlightsSection}>
        <div>
          Designed in
          <FigmaIcon className={styles.productIcon} />
        </div>
        <div>
          Built with
          <GatsbyIcon className={styles.productIcon} />
        </div>
        <div>
          Hosted on
          <DigitalOceanIcon className={styles.productIcon} />
        </div>
        <div>AA accessibility rated</div>
        <div className={styles.smallerText}>
          Modern CSS using CSS grids and custom variables
        </div>
      </section>
      <section className={`card ${styles.descriptionCard}`}>
        <p>
          Designing a personal website is certainly a challenge. This is finally
          the project where you can make it whatever you want and you really
          want to show everything you got! But time and complexity forces you to
          reduce your ambitions, so hooray for a middle-ground?
        </p>
        <p>
          With the design I’ve tried to make it simple but still has some punch
          to it. I’ve made it AA accesible according to the WCAG standards and I
          hope I made it interesting in terms of content and copy.
        </p>
        <p>
          One of the goals making this site was to learn Gatsby.js and I feel
          like I’ve gotten a good introduction to the framework - so far I’m
          really loving it. Working with components in a React-way while still
          getting a really fast static website is super nice.
        </p>
        <p>
          Building this website I’ve deepened my knowledge in CSS with custom
          variables, grids and animations which has been very interesting.
        </p>
      </section>
    </Layout>
  );
};

export default HowIBuiltThisPage;

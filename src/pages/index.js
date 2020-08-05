import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import LinkButton from "../components/linkButton";
import Footer from "../components/footer";

import styles from "../styles/index.module.css";
import variables from "../styles/variables";

const IndexPage = () => {
  const data = useStaticQuery(indexPageStaticQuery);

  return (
    <>
      <main className={styles.main}>
        <SEO title="Hi there" />
        <section className={styles.topSection}>
          <section className={styles.presentationCard}>
            <h1>Hi there, I'm Simon</h1>
            <p>
              I’m a software engineer with a passion for web development. Right
              now I’m most interested in frontend, both designing and coding.
            </p>
            <LinkButton
              linkText="More about me"
              linkTo="/about-me"
              backgroundColor={variables.secondaryColor()}
            />
          </section>
          <div className={styles.profilePictureContainer}>
            <Img
              fluid={data.profilePicture.childImageSharp.fluid}
              alt="Portrait of me, Simon Nielsen"
              imgStyle={{ borderRadius: "1.2rem" }}
            />
          </div>
        </section>
        <section className={styles.siteNavSection}>
          <SiteNavCard
            title="Portfolio"
            img={
              <Img
                fluid={data.portfolioPreviewImg.childImageSharp.fluid}
                alt="Preview of my porfolio"
                imgStyle={{ borderRadius: "1.2rem" }}
              />
            }
            text="I’ve built some stuff both as a professional coder and UX design student."
            linkText="To portfolio"
            linkTo="/portfolio"
          />
          <SiteNavCard
            title={
              <span style={{ fontSize: "1.8rem", lineHeight: "2.6rem" }}>
                How I{" "}
                <span
                  style={{
                    fontFamily: "monospace",
                    fontWeight: "500",
                    color: "#FBC539",
                  }}
                >
                  {"<built/>"}
                </span>{" "}
                This
              </span>
            }
            img={
              <Img
                fluid={data.codeImg.childImageSharp.fluid}
                alt="Some code on a screen"
                imgStyle={{ borderRadius: "1.2rem" }}
              />
            }
            text="I learned a lot building this website, both designwise and codewise. Gatsby rocks!"
            linkText="How it was made"
            linkTo="/how"
          />
          <SiteNavCard
            title="Resources"
            img={
              <Img
                fluid={data.resourcesImg.childImageSharp.fluid}
                alt="Preview of resources"
                imgStyle={{ borderRadius: "1.2rem" }}
              />
            }
            text="Looking for new design tools, inspiration or a new podcast to listen to? Check this out."
            linkText="Check it out"
            linkTo="/resources"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

const SiteNavCard = ({ title, img, text, linkText, linkTo }) => (
  <article className={`card ${styles.siteNavCard}`}>
    <div className={styles.siteNavCardImgContainer}>{img}</div>
    <h2 style={{ textTransform: "none" }}>{title}</h2>
    <p>{text}</p>
    <LinkButton linkText={linkText} linkTo={linkTo} />
  </article>
);

SiteNavCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  img: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

const indexPageStaticQuery = graphql`
  query {
    profilePicture: file(relativePath: { eq: "profilepicture.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    portfolioPreviewImg: file(relativePath: { eq: "portfolio-preview.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    codeImg: file(relativePath: { eq: "code-img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    resourcesImg: file(relativePath: { eq: "resources.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LinkButton from "../components/linkButton";
import layoutStyles from "../styles/layout.module.css";
import styles from "../styles/portfolio.module.css";
import DeviesLogo from "../icons/devies.svg";

const PortfolioPage = () => {
  const data = useStaticQuery(portfolioPageStaticQuery);
  return (
    <Layout>
      <SEO title="Portfolio" />
      <h1 className={layoutStyles.pageTitle}>Portfolio</h1>
      <section className={styles.cardsSection}>
        <PortfolioPreviewCard
          title="Frontend Engineer @Devies"
          year="2020-"
          description="Working with several projects such as webshop in React for Bräutigams and a Vue application for influencers."
          img={<DeviesLogo width="90%" maxwidth="358px" />}
          linkTo="/portfolio/devies"
          linkText="More about my work"
        />
        <PortfolioPreviewCard
          title="Summer internship @Idean"
          year="2019"
          description="Designing a prototype webapp for making the lives of people with diabetes easier for the Norweigian e-Health Directorate."
          img={
            <Img
              fluid={data.internshipPreview.childImageSharp.fluid}
              alt="Interface of app"
              imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
            />
          }
          linkTo="/portfolio/summer-internship"
          linkText="Explore the internship"
        />
        <PortfolioPreviewCard
          title="Master Thesis & School projects"
          year="2016, 2019-2020"
          description="Showcasing three projects from my master’s programme as well as my bachelor thesis."
          img={
            <Img
              fluid={data.schoolProjectsPreview.childImageSharp.fluid}
              alt="People using one of the projects"
              imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
            />
          }
          linkTo="/portfolio/school-projects"
          linkText="See my projects"
        />
        <PortfolioPreviewCard
          title="Full stack developer"
          year="2016-2018"
          description="Went on the journey from startup to scaleup with Minna Technologies as their first hired fulltime developer. Two years later we were 35 people."
          img={
            <Img
              fluid={data.mtPreview.childImageSharp.fluid}
              alt="Interface of app"
              imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
            />
          }
          linkTo="/portfolio/full-stack-developer"
          linkText="About the experience"
        />
      </section>
    </Layout>
  );
};

const PortfolioPreviewCard = ({
  title,
  year,
  description,
  img,
  linkTo,
  linkText,
}) => {
  return (
    <article className={`card ${styles.portfolioPreviewCard}`}>
      <div className={styles.portfolioCardInfo}>
        <h2>{title}</h2>
        <p className={styles.portfolioYear}>{year}</p>
        <p className={styles.descriptionText}>{description}</p>
        <div className={`${styles.imgInText} ${styles.previewImgContainer}`}>
          {img}
        </div>
        <LinkButton linkText={linkText} linkTo={linkTo} />
      </div>
      <div className={`${styles.imgAtSide} ${styles.previewImgContainer}`}>
        {img}
      </div>
    </article>
  );
};

PortfolioPreviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

const portfolioPageStaticQuery = graphql`
  query {
    masterThesisPreview: file(
      relativePath: { eq: "portfolio/master_thesis_preview.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    internshipPreview: file(
      relativePath: { eq: "portfolio/internship_preview.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    schoolProjectsPreview: file(
      relativePath: { eq: "portfolio/school_projects_preview.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mtPreview: file(relativePath: { eq: "portfolio/mt_preview.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default PortfolioPage;

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import layoutStyles from "../../styles/layout.module.css";
import styles from "../../styles/full-stack-developer.module.css";

const FullStackDeveloperPage = () => {
  const data = useStaticQuery(fullstackPageStaticQuery);
  const mtLogoImg = (
    <Img
      fluid={data.mtLogo.childImageSharp.fluid}
      alt="Minna Technologies logo"
      imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
    />
  );
  return (
    <Layout>
      <SEO title="Portfolio - Full Stack" />
      <h1 className={layoutStyles.smallerPageTitle}>Full stack developer</h1>
      <section className={styles.overviewSection}>
        <h2>Overview</h2>
        <div className={`card ${styles.portfolioTextCard}`}>
          <h3>The company</h3>
          <div className={styles.companyCardContent}>
            <p>
              Minna Technologies is a Gothenburg-based company that develops the
              app Mina Tjänster, a service that keeps track on your recurring
              payments such as subscriptions for mobile, electricity, streaming
              services and gym memberships. A user can cancel or change their
              subscriptions as well as buy new ones in the app. The service is
              also available inside a number of european banks. When Simon was
              working there the service was built as a web app with React.js and
              a Scala backend.
            </p>
            <div className={styles.mtLogoInTextContainer}>{mtLogoImg}</div>
          </div>
        </div>
        <div className={`card ${styles.portfolioTextCard}`}>
          <h3>My role</h3>
          <p>
            I was one of the first developers in the company which grew from a
            size of 7 to 35 people during my time there. My role developed from
            frontend developer to full stack developer were I got to coach and
            teach a lot of team members that joined later on. My focus towards
            the end of my time there was with developing A/B tests and
            restructuring a lot of the frontend application. Some other things I
            worked with was integrating the service into the Swedbank app (the
            first bank integration) and cooperating with mobile and electricity
            suppliers to send orders and cancellations through their APIs. I
            also developed a lot of the React components and worked on aligning
            the company in how they wrote their React code.
          </p>
        </div>
        <div className={`card ${styles.portfolioTextCard}`}>{mtLogoImg}</div>
      </section>
      <section className={styles.portfolioSection}>
        <h2>Learnings and Technologies</h2>
        <div className={`card ${styles.learningsCard}`}>
          <div>
            <h3>My learnings</h3>
            <p>
              I learned a lot from his time at Minna. For example how to work in
              an agile team, how to do good code reviews, how to onboard new
              people, how to write code that is readable and reusable and how
              the web works from the user clicking the UI all the way through to
              the database.
            </p>
          </div>
          <div>
            <h3>Technologies</h3>
            <Img
              fluid={data.techLogos.childImageSharp.fluid}
              alt="Logos of React, React Native, Redux, Scala, MongoDB, kubernetes and Docker"
              imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

const fullstackPageStaticQuery = graphql`
  query {
    mtLogo: file(
      relativePath: { eq: "portfolio/full-stack-developer/mt-logo.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    techLogos: file(
      relativePath: { eq: "portfolio/full-stack-developer/tech-logos.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default FullStackDeveloperPage;

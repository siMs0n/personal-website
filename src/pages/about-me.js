import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import layoutStyles from "../styles/layout.module.css";
import LinkedInIcon from "../icons/linkedin-icon.svg";
import GitHubIcon from "../icons/github-icon.svg";
import styles from "../styles/about.module.css";

const AboutMePage = () => {
  const data = useStaticQuery(aboutPageStaticQuery);
  return (
    <Layout>
      <SEO title="About me" />
      <h1 className={layoutStyles.pageTitle}>About me</h1>
      <section className={styles.topSection}>
        <article className={`card ${styles.presentationCard}`}>
          <div className={styles.presentationCardContent}>
            <ProfileImgAndLinks data={data} inText />
            <p>
              <span className={styles.firstSentence}>
                My name is Simon Nielsen.
              </span>{" "}
              I recently graduated from Chalmers as a software engineer with a
              master’s in Interaction Design. I love learning new things and
              currently I’m passionate about web development - all the way from
              the server, to web apps and designing the interfaces.
            </p>
            <p>
              I like technical challenges and to come up with exciting ideas for
              projects but I feel like I’m also a good complement to the
              visionaries when you need to come up with practical solutions that
              will work in reality. For a project to succeed I think the team is
              the most important thing and I really enjoy learning as much as I
              can from my team members.{" "}
            </p>
            <p>
              In my spare time I sing and act in Chalmerspexet (you should come
              and see our shows!) and spend time with my friends and girlfriend.
              I love having a lot of stuff going on like making music, playing
              around with 3D software, programming projects and planning trips.
            </p>
          </div>
        </article>
        <ProfileImgAndLinks data={data} />
      </section>
      <section className={styles.skillsSection}>
        <h2>Skills</h2>
        <article className={`card ${styles.skillsCard}`}>
          <div className={styles.skillsSpanTwo}>
            <h3 className={styles.skillsHeading}>Development</h3>
            <p>
              HTML
              <br />
              CSS
              <br />
              Javascript
              <br />
              React
              <br />
              Scala
              <br />
              React Native
              <br />
              MongoDb
              <br />
            </p>
          </div>
          <div className={styles.skillsSpanTwo}>
            <h3
              className={styles.skillsHeading}
              style={{ visibility: "hidden" }}
            >
              continued
            </h3>
            <p>
              Node.js
              <br />
              Express.js
              <br />
              Gatsby.js
              <br />
              REST
              <br />
              Android
              <br />
              MySQL
              <br />
              Docker
              <br />
            </p>
          </div>
          <div className={styles.skillsSpanTwo}>
            <h3 className={styles.skillsHeading}>Design</h3>
            <p>
              UX design
              <br />
              Interviews
              <br />
              Ideation
              <br />
              Prototyping
              <br />
              UX and usability evaluation
              <br />
            </p>
          </div>
          <div>
            <h3 className={styles.skillsHeading}>Tools</h3>
            <p>
              Figma
              <br />
              Blender
              <br />
              Git
            </p>
          </div>
          <div>
            <h3 className={styles.skillsHeading}>Methods</h3>
            <p>
              Scrum
              <br />
              Kanban
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
};

const ProfileImgAndLinks = ({ data, inText }) => (
  <div
    className={`${styles.pictureAndLinksContainer} ${
      inText ? styles.portraitInText : styles.portraitOutside
    }`}
  >
    <div className={styles.profilePictureContainer}>
      <Img
        fluid={data.profilePicture.childImageSharp.fluid}
        alt="Portrait of me, Simon Nielsen"
        imgStyle={{ borderRadius: "1.2rem" }}
      />
    </div>
    <div>
      <a
        className={styles.iconButtonLink}
        href="https://www.linkedin.com/in/simon-nielsen-662b5740/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon className={styles.iconButton} />
      </a>
      <a
        className={styles.iconButtonLink}
        href="https://github.com/siMs0n/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon className={styles.iconButton} />
      </a>
    </div>
  </div>
);

const aboutPageStaticQuery = graphql`
  query {
    profilePicture: file(relativePath: { eq: "profilepicture.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutMePage;

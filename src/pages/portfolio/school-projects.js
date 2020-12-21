import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import layoutStyles from "../../styles/layout.module.css";
import styles from "../../styles/school-projects.module.css";

const SchoolProjectsPage = () => {
  const data = useStaticQuery(SchoolProjectsPageStaticQuery);
  return (
    <Layout>
      <SEO title="Portfolio - School" />
      <h1 className={layoutStyles.smallerPageTitle}>
        Master thesis and school projects
      </h1>
      <section className={styles.overviewSection}>
        <h2>Master thesis (2020)</h2>
        <div className={`card ${styles.portfolioTextCard}`}>
          <div className={styles.portfolioTextPart}>
            <h3>Background</h3>
            <p>
              Insomnia is a big problem in society and currently no long-term
              scalable solution to this exists. Cognitive behavioral therapy is
              the recommended treatment for insomnia and could potentially be
              delivered digitally. It can be argued that motivation and
              engagement is very important for a digital behavior change
              ntervention to be successful and some concepts and guidelines has
              previously been proposed to design for this. My thesis aimed to
              answer what should be considered when designing for motivation and
              engagement in a smartphone app for behavioral change intervention
              in insomnia.
            </p>
            <h3>The process</h3>
            <p>
              To answer this I conducted a design process with four main phases:
              research, ideation, prototyping and evaluation. In the research
              phase both a psychologist specializing in cognitive behavioral
              therapy and multiple people with insomnia were interviewed to
              understand the problem area better. Then an interactive prototype
              was developed that was evaluated with design experts and several
              people with insomnia.
            </p>
            <h3>The result</h3>
            <p>
              The result was some promising features and themes that should be
              considered, for example A caring onboarding, Personalisation of
              content and control features, and Smart reminders. In the end
              SleepCure was happy with the results and aimed to incorporate some
              of the features and suggestions into the next version of their
              app. They were also pleased with having some research about their
              users.
            </p>
            <h3>Learnings</h3>
            <p>
              - Learned a lot about the science behind motivation and engagement
              <br />
              - Went through a longer design process, practicing all phases
              <br />- Designed an onboarding an parts of a mobile app
            </p>
          </div>
          <div className={styles.prototypeImageWrapper}>
            <div>
              <Img
                fluid={data.thesisHome.childImageSharp.fluid}
                alt="Home screen of app"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>Personalisation of content</p>
            </div>
            <div>
              <Img
                fluid={data.thesisLearning.childImageSharp.fluid}
                alt="Different modules with learning"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>Learning modules</p>
            </div>
            <div>
              <Img
                fluid={data.thesisChallenge.childImageSharp.fluid}
                alt="A challenge about drinking less coffee"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>Relevant challenges</p>
            </div>
            <div>
              <Img
                fluid={data.thesisIsi.childImageSharp.fluid}
                alt="A graph of ISI score"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>Measureable progress</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const SchoolProjectsPageStaticQuery = graphql`
  query {
    thesisHome: file(
      relativePath: { eq: "portfolio/school-projects/master-thesis/home.png" }
    ) {
      childImageSharp {
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thesisLearning: file(
      relativePath: {
        eq: "portfolio/school-projects/master-thesis/learning_overview.png"
      }
    ) {
      childImageSharp {
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thesisChallenge: file(
      relativePath: {
        eq: "portfolio/school-projects/master-thesis/morning_challenge.png"
      }
    ) {
      childImageSharp {
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thesisIsi: file(
      relativePath: { eq: "portfolio/school-projects/master-thesis/isi.png" }
    ) {
      childImageSharp {
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default SchoolProjectsPage;

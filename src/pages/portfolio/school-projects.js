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
      <section>
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
      <section>
        <h2>The war inside your body (2019)</h2>
        <div className={`card ${styles.portfolioTextCard}`}>
          <div className={styles.portfolioTextPart}>
            <h3>The task</h3>
            <p>
              Teenagers interest in natural sciences is decreasing in Swedish
              schools. To boost their interest the science center Universeum
              partnered with Chalmers University to organize an exhibition. For
              a few weeks I was a part of a group of four other students that
              developed a prototype that we tested in Universeum for our course
              Interaction Design project.
            </p>
            <h3>The process</h3>
            <p>
              Through different ideation methods and idea selection methods we
              came up with the concept that was then iterated upon after more
              research into how the complement system works. Utilizing the
              KJ-method and storyboards we outlined the experience and worked
              with how to simplify the problem enough to be understandable and
              interesting for teenagers. We developed paper prototypes and
              worked with the tabletop technologies and Unity to finally bring
              everything together.
            </p>
            <h3>The result</h3>
            <p>
              We created “The War Inside Your Body”. An interactive tabletop
              experience where users combine different proteins in order to
              defend the body from invading bacteria. The goal of the project
              was to illustrate how the complement system works and how
              seemingly basic components like molecules or proteins can interact
              with one another in order to create rich and complex systems. The
              gameplay consisted of interacting with digital components with
              physical markers to drive a narrative with 3D animations of parts
              of the complement system.
            </p>
            <h3>Learnings</h3>
            <p>
              - Collaborating with a team of designers in a larger project
              <br />
              - Working with tangible interfaces and 3D game engines
              <br />- Experience in designing for children and teenagers
            </p>
          </div>
          <div className={styles.prototypeImageWrapper}>
            <div>
              <Img
                fluid={data.kjMethod.childImageSharp.fluid}
                alt="Post-its grouped on whiteboard"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>KJ method in progress</p>
            </div>
            <div>
              <Img
                fluid={data.tableSetup.childImageSharp.fluid}
                alt="Laptop showing captured tracking data"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>Prototyping setup with projector, table and tracking</p>
            </div>
            <div>
              <Img
                fluid={data.projectorUniverseum.childImageSharp.fluid}
                alt="Projector screen with game on it"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>
                The environment on the projector reacts to the user’s
                interactions on the table.
              </p>
            </div>
            <div>
              <Img
                fluid={data.tableUniverseum.childImageSharp.fluid}
                alt="Two girls using game trackers on table"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>Multiple trackers invites for collaboration.</p>
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
    kjMethod: file(
      relativePath: {
        eq: "portfolio/school-projects/war-inside-your-body/kj-method.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 375) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tableSetup: file(
      relativePath: {
        eq: "portfolio/school-projects/war-inside-your-body/table-setup.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 375) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectorUniverseum: file(
      relativePath: {
        eq: "portfolio/school-projects/war-inside-your-body/projector-universeum.png"
      }
    ) {
      childImageSharp {
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tableUniverseum: file(
      relativePath: {
        eq: "portfolio/school-projects/war-inside-your-body/table-universeum.png"
      }
    ) {
      childImageSharp {
        fluid(maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default SchoolProjectsPage;

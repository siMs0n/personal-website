import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import LinkButton from "../../components/linkButton";
import layoutStyles from "../../styles/layout.module.css";
import styles from "../../styles/summer-internship.module.css";

const SummerInternshipPage = () => {
  const data = useStaticQuery(summerInternshipPageStaticQuery);
  return (
    <Layout>
      <SEO title="Portfolio - Internship" />
      <h1 className={layoutStyles.smallerPageTitle}>Summer internship</h1>
      <section className={styles.overviewSection}>
        <h2>Project overview</h2>
        <div className={`card ${styles.portfolioTextCard}`}>
          <h3>Background</h3>
          <p>
            The internship was as a UX designer at Idean, part of Capgemini
            Invent, in Oslo. It lasted for 8 weeks between June and August of
            2019. I was paired up with another UX design intern and three
            developer interns to do a project with the Norwegian e-Health
            Directorate.
          </p>
          <h3>The problem</h3>
          <p>
            The e-Health Directorate wanted to explore the possibilities of
            utilizing consumer wearable devices in healthcare. Together with
            them we decided to focus on people with type 1 diabetes since they
            seemed like a group that could see a lot of benefit from this
            development.
          </p>
          <h3>The solution</h3>
          <p>
            A web application called “Helseinnsikt” (Health insight) where you
            can sync your wearable devices and get access to your health data
            such as blood sugar levels, physical activity and steps. You can
            compare data sources to understand more about how things like
            activity and food influences your blood sugar. The e-Health
            Directorate was very happy with the prototype and decided right away
            to move forwards with the concept.
          </p>
        </div>
        <div className={`card ${styles.portfolioTextCard}`}>
          <h3>My role</h3>
          <p>
            I was one of the two UX-designers on the project but because of my
            technical background I was also part of some technical decisions.
            Together with the other designer we lead a design sprint together
            with the developers, planned and made nine interviews and designed
            the UI. At the end of the project I also programmed some of the
            functionality.
          </p>
          <h3>Method and tools</h3>
          <p>
            Service model canvas, interviews, Google design sprint, paper
            prototyping, high fidelity mockups in Figma.
          </p>
        </div>
        <div
          className={`card ${styles.portfolioTextCard} ${styles.prototypeCard}`}
        >
          <Img
            fluid={data.internshipPreview.childImageSharp.fluid}
            alt="Interface of app"
            imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
          />
          <LinkButton
            linkText="View Prototype"
            linkTo={
              "https://www.figma.com/proto/DPAOZGo1bDFkyLqGkR1m7vAv/eHelse-PGD?node-id=323%3A55&scaling=scale-down"
            }
            external
          />
        </div>
      </section>
      <section className={styles.portfolioSection}>
        <h2>Discovery</h2>
        <div className={`card ${styles.discoveryCard}`}>
          <div>
            <h3>Desk research and problem definition</h3>
            <p>
              We started by doing some research about diabetes, technical
              possibilities in consumer wearables devices and how wearables are
              used today in healthcare. Then together with the e-Health
              Directorate we had a lot of discussions and a workshop around what
              the problem was and what kind of solutions they were looking for.
              They wanted the solution to involve utilizing wearables in
              healthcare but other than that it was very open, leading to an
              exploratory project.
              <br />
              Together we decided to focus on people with diabetes type 1 since
              they have a chronic disease that requires checking on your blood
              sugar levels and that they can benefit a lot by getting activated
              in healthy activities.
            </p>
          </div>
          <Img
            fluid={data.discoveryPhoto.childImageSharp.fluid}
            alt="Three people from the team looking at post-its"
            imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
          />
          <div>
            <h3>Problem space</h3>
            <p>
              This resulted in a model of the problem space were we needed to
              find out what to fit in the empty spots. <br />
              How do we sync data to the Norwegian health platform? <br />
              What kind of app can we create there that brings value to the
              users?
              <br />
              And how can we enable them to share their data with healthcare
              personnel in a safe way if the choose to do so?
            </p>
          </div>
          <Img
            fluid={data.problemSpace.childImageSharp.fluid}
            alt="Diagram of problem space"
            imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
          />
        </div>
      </section>
      <section className={styles.portfolioSection}>
        <h2>Design sprint</h2>
        <div className={`card ${styles.designSprintCard}`}>
          <div>
            <h3>Sprinting on...</h3>
            <p>
              Our next step was to perform a design sprint. We used the research
              we’ve already gathered to start to sketch solutions and make
              storyboards. From this we got a lot of ideas for features that we
              combined into wireframes to test with two persons with diabetes in
              interviews at the end of the week. These interviews also gave us
              more information about how it is to live with diabetes.
            </p>
            <Img
              fluid={data.googleDesignSprint.childImageSharp.fluid}
              alt="Phases of a Google design sprint week"
              imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
              className={styles.googleDesignSprintImageWrapper}
            />
          </div>
          <Img
            fluid={data.sprintPhoto.childImageSharp.fluid}
            alt="Team looking at wall of paper sketches"
            imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
          />
        </div>
      </section>
      <section className={styles.portfolioSection}>
        <h2>Interviews and prototyping</h2>
        <div className={`card ${styles.interviewsCard}`}>
          <div>
            <h3>Interviewing: invaluable and time-consuming</h3>
            <p>
              Throughout the project we conducted six interviews with people
              with diabetes and two interviews with diabetes nurses. We learned
              a lot from them about how it is to live with diabetes and what
              challenges they face as well as how they interact with healthcare.
              For example, people with diabetes often have a hard time
              understanding why their blood sugar levels are especially low or
              high at a specific time which can be frustrating. Even though we
              learned a bunch the interviews had their price: it took a lot of
              time to find people and set up the interviews.
            </p>
          </div>
          <div>
            <h3>Prototypes</h3>
            <p>
              From our first wireframes we continued to modify the interface and
              features of the webapp. Usually for every new interview, we had
              something new to show and evaluate.
              <br />
              After some time we were introduced to the design library of the
              page where we imagined our solution to live so for the sake of
              consistency and now having to put time on branding we chose to use
              their design components.
            </p>
          </div>
          <div className={styles.prototypeImageWrapper}>
            <div>
              <Img
                fluid={data.lowFiPrototype.childImageSharp.fluid}
                alt="Team looking at wall of paper sketches"
                imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
              />
              <span>From paper sketches...</span>
            </div>
            <div>
              <Img
                fluid={data.wireframePrototype.childImageSharp.fluid}
                alt="Team looking at wall of paper sketches"
                imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
              />
              <span>...to low fidelity wireframes...</span>
            </div>
            <div className={styles.twoPrototypeImages}>
              <Img
                fluid={data.midFiPrototype.childImageSharp.fluid}
                alt="Team looking at wall of paper sketches"
                imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
              />
              <Img
                fluid={data.internshipPreview.childImageSharp.fluid}
                alt="Interface of app"
                imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
              />
              <span>...to high fidelity interactive prototype.</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.portfolioSection}>
        <h2>Result and key learnings</h2>
        <div className={`card ${styles.resultCard}`}>
          <div>
            <h3>Result</h3>
            <p>
              The result was a web application called “Helseinnsikt” (Health
              insight) where you can sync your wearable devices and get access
              to your health data such as blood sugar levels, physical activity
              and steps. You can compare data sources to understand more about
              how things like activity and food influences your blood sugar.
              <br />
              The e-Health Directorate was very happy with the prototype and
              decided right away to move forwards with the concept.
            </p>
          </div>
          <div>
            <h3>Key learnings</h3>
            <p>
              From this project I learned tons about how to drive a design
              process with a team and communicating with the customer to ensure
              we delivered something useful that they wanted. I got experience
              in holding interviews, performing a design sprint and deliver a
              design with a clear rationale to a customer.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const summerInternshipPageStaticQuery = graphql`
  query {
    internshipPreview: file(
      relativePath: { eq: "portfolio/internship_preview.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    discoveryPhoto: file(
      relativePath: { eq: "portfolio/summer-internship/idean_discovery.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    problemSpace: file(
      relativePath: {
        eq: "portfolio/summer-internship/idean_problem_space.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    googleDesignSprint: file(
      relativePath: {
        eq: "portfolio/summer-internship/idean_google_design.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sprintPhoto: file(
      relativePath: { eq: "portfolio/summer-internship/idean_sprint.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lowFiPrototype: file(
      relativePath: { eq: "portfolio/summer-internship/idean_low_fi.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wireframePrototype: file(
      relativePath: { eq: "portfolio/summer-internship/idean_wireframe.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    midFiPrototype: file(
      relativePath: { eq: "portfolio/summer-internship/idean_mid_fi.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default SummerInternshipPage;

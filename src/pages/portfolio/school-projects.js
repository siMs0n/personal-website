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
      <section className={styles.schoolProjectSection}>
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
      <section className={styles.schoolProjectSection}>
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
      <section className={styles.schoolProjectSection}>
        <h2>Alone with the thoughts(2019)</h2>
        <div className={`card ${styles.portfolioTextCard}`}>
          <div className={styles.portfolioTextPart}>
            <h3>The task</h3>
            <p>
              This was an individual project done as part of the course
              Designing User Experiences. Our task was to create a critical
              design that was designed around an emotion. I chose to design
              around anxiety with the goal of helping people to understand those
              dealing with anxiety to reduce the related stigma.
            </p>
            <h3>The process</h3>
            <p>
              It was an iterative process with many steps during a few weeks. A
              lot surrounded around an interview subject that has had for many
              years and still suffers from severe depression. This person helped
              me get more understanding for the experience of living with
              depression and was also part of evaluating the design towards the
              end.
            </p>
            <h3>The result</h3>
            <p>
              I developed a VR prototype game in A-frame that could be
              experienced with Google Cardboard and headphones. The player tries
              to act and think in a way where you avoid anxiety attacks by
              looking at an alternative at each “question” to pick it. They are
              placed in a few typical anxiety induced scenarios and their
              anxiety is represented by the “anxiety ghost” that whispers their
              negative thoughts. Throughout the game you learn some techniques
              to reduce negative though spirals and how to ease an anxiety
              attack.
            </p>
            <h3>Learnings</h3>
            <p>
              - Designing a design process and follow it through.
              <br />
              - Design for an emotion in an immersive medium.
              <br />
              - Interview experts about a sensitive subject.
              <br />
              - Think critically about what kind of experience I want the users
              to have and what they should learn from it.
              <br />- Quickly develop a high-fidelity prototype.
            </p>
          </div>
          <div className={styles.prototypeImageWrapper}>
            <div>
              <Img
                fluid={data.designProcess.childImageSharp.fluid}
                alt="Chart of design process"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>Design process</p>
            </div>
            <div>
              <Img
                fluid={data.circumplex.childImageSharp.fluid}
                alt="Graph with red cross near nervous and tense"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>Design goal of UX in the Circumplex Model of Affect</p>
            </div>
            <div>
              <Img
                fluid={data.tillman.childImageSharp.fluid}
                alt="Ghost says mean things about woman"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>The anxiety ghost by Marie Tillman</p>
            </div>
            <div>
              <Img
                fluid={data.anxietyGhost.childImageSharp.fluid}
                alt="3D ghost in game"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>The anxiety ghost in my game</p>
            </div>
            <div>
              <Img
                fluid={data.mechanics.childImageSharp.fluid}
                alt="In game deciding on actions"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>Choose what to think, in order to not get an anxiety attack</p>
            </div>
            <div>
              <Img
                fluid={data.therapist.childImageSharp.fluid}
                alt="3D therapist behind desk"
                imgStyle={{ objectFit: "contain" }}
              />
              <p>Learn basic coping skills from an in-game therapist</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.schoolProjectSection}>
        <h2>Artist transport system for way out west (2016-2017)</h2>
        <div className={`card ${styles.bachelorThesisCard}`}>
          <div>
            <h3>Bachelor thesis and beyond</h3>
            <p>
              As a bachelor thesis I was part of a group of students who
              developed an artist transport system for music festivals. We did
              this in collaboration with a company that handles the logistics of
              transporting artists during some major music festivals in Sweden.
              Transporting artists means planning and providing rides from the
              airport to their hotel, to the venue and other places during their
              stay in the city of the festival.
            </p>
            <p>
              We developed a web application with an automatic scheduling
              algorithm as well as an app for the drivers. I was mainly working
              on the web app. After the thesis was completed we kept working on
              the web app to have it ready for Way out West the following year.
            </p>
            <p>
              So far it has been used succesfully for three consecutive years,
              providing a much needed system for organising over 700 rides, 50
              artists, 40 drivers and 30 vehicles each year.
            </p>
          </div>
          <div className={styles.bachelorImageWrapper}>
            <Img
              fluid={data.eciton.childImageSharp.fluid}
              alt="Two screens running the system at Way out West"
              imgStyle={{ objectFit: "contain" }}
            />
            <p>The system in action</p>
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
        fluid(maxHeight: 512) {
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
        fluid(maxHeight: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    designProcess: file(
      relativePath: {
        eq: "portfolio/school-projects/alone-with-the-thoughts/design-process.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    circumplex: file(
      relativePath: {
        eq: "portfolio/school-projects/alone-with-the-thoughts/circumplex.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tillman: file(
      relativePath: {
        eq: "portfolio/school-projects/alone-with-the-thoughts/tillman.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    anxietyGhost: file(
      relativePath: {
        eq: "portfolio/school-projects/alone-with-the-thoughts/anxiety-ghost.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mechanics: file(
      relativePath: {
        eq: "portfolio/school-projects/alone-with-the-thoughts/mechanics.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    therapist: file(
      relativePath: {
        eq: "portfolio/school-projects/alone-with-the-thoughts/therapist.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eciton: file(
      relativePath: {
        eq: "portfolio/school-projects/bachelor-thesis/eciton.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default SchoolProjectsPage;

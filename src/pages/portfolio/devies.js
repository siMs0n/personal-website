import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import LinkButton from "../../components/linkButton";
import layoutStyles from "../../styles/layout.module.css";
import styles from "../../styles/devies.module.css";
import DeviesLogo from "../../icons/devies.svg";
import PaperIcon from "../../icons/paper.svg";
import ConsultantCV from "../../downloads/DeviesCV_Simon_Nielsen_2020-11-18_23_19.pdf";

const DeviesPage = () => {
  return (
    <Layout>
      <SEO title="Portfolio - Devies" />
      <h1 className={layoutStyles.smallerPageTitle}>
        Frontend Engineer @Devies
      </h1>
      <section className={styles.overviewSection}>
        <h2>Overview</h2>
        <div className={`card ${styles.textCard}`}>
          <p>
            <a
              href="https://www.devies.se/"
              target="blank"
              rel="noopener noreferrer"
            >
              Devies
            </a>{" "}
            is a small consulting company in Gothenburg that is helping
            companies with web development, app development, system architecture
            and UX design. It’s a nice place with great people. Everyone is
            really passionate and skilled in what they are doing.
          </p>
          <p>
            I’m currently working there as a frontend developer where I’ve
            worked in multiple projects already. I’ve learned a lot in just a
            few months like TypeScript, Vue, GraphQL and Sass.
          </p>
          <p>
            If you’re interested in hiring me for a project, check out my
            consultant CV (in Swedish) and connect with me on LinkedIn or send
            me an email at{" "}
            <a
              href="mailto:simon.nielsen@devies.se"
              target="blank"
              rel="noopener noreferrer"
            >
              simon.nielsen@devies.se
            </a>
          </p>
        </div>
        <div className={`card ${styles.logoCard}`}>
          <DeviesLogo width="100%" maxWidth="358px" />
        </div>
        <div className={`card ${styles.cvCard}`}>
          <PaperIcon />
          <LinkButton linkTo={ConsultantCV} linkText="Download CV" download />
        </div>
      </section>
      <section className={styles.projectSection}>
        <h2>Projects (coming soon)</h2>
      </section>
    </Layout>
  );
};

export default DeviesPage;

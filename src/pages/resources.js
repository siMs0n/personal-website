import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LinkButton from "../components/linkButton";
import layoutStyles from "../styles/layout.module.css";
import styles from "../styles/resources.module.css";

const ResourcesPage = () => {
  const data = useStaticQuery(resourcesPageStaticQuery);
  return (
    <Layout>
      <SEO title="Resources" />
      <h1 className={layoutStyles.pageTitle}>Resources</h1>
      <section className={styles.cardsSection}>
        {resources.map(resource => (
          <article
            className={`card ${styles.resourceCard}`}
            key={resource.title}
          >
            <div className={styles.resourceImgContainer}>
              {
                <Img
                  fluid={data[resource.img].childImageSharp.fluid}
                  alt={resource.title + " logo"}
                  imgStyle={{ borderRadius: "0.8rem", objectFit: "contain" }}
                />
              }
            </div>
            <h2>{resource.title}</h2>
            <p className={styles.descriptionText}>
              {resource.description}
              {resource.bonusLink && (
                <a
                  href={resource.bonusLink}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  {resource.bonusLink}
                </a>
              )}
            </p>
            <LinkButton
              linkText={resource.linkText}
              linkTo={resource.linkTo}
              external
            />
          </article>
        ))}
      </section>
    </Layout>
  );
};

const resources = [
  {
    title: "Level Up Tutorials",
    description:
      "Engaging tutorials on everything web development. I learned Gatsby.js from him. Definitely worth a membership!",
    img: "levelUpTutorialsLogo",
    linkText: "Go learn",
    linkTo: "https://www.leveluptutorials.com/",
  },
  {
    title: "Syntax Podcast",
    description:
      "A podcast about web development from Wes Bos and Scott Tolinski. They’re fun and talk about loads of interesting things!",
    img: "syntaxLogo",
    linkText: "Take a listen",
    linkTo: "https://syntax.fm/",
  },
  {
    title: "Fireship.io",
    description:
      "Awesome fast-paced tutorials on tons of interesting programming topics, especially surrounding Javascript and Firebase.",
    img: "fireshipLogo",
    linkText: "Go watch",
    linkTo: "https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA",
  },
  {
    title: "Get Waves",
    description:
      "Cool tool to generate SVG waves for websites and such. Simple and useful.",
    img: "getWavesLogo",
    linkText: "Get wavy",
    linkTo: "https://getwaves.io/",
  },
  {
    title: "700+ CSS Icons",
    description: "Like the title says, 700+ CSS icons for free. Bonus: ",
    bonusLink: "https://tablericons.com/",
    img: "cssIconsLogo",
    linkText: "Check it out",
    linkTo: "https://css.gg/",
  },
  {
    title: "Bookmarks.design",
    description:
      "“The best resources for designers in one place”. I’ve just begun to look at what they’ve got, it sure looks interesting!",
    img: "bookmarksDesignLogo",
    linkText: "Learn more",
    linkTo: "https://www.bookmarks.design/",
  },
  {
    title: "Overreacted",
    description:
      "Dan Abramovs personal blog. Insightful posts from what I’ve read so far.",
    img: "overreactedLogo",
    linkText: "Read on",
    linkTo: "https://overreacted.io/",
  },
  {
    title: "Tech Lead Compass",
    description:
      "A collection of resources to help you improve as, or become, a Tech lead.",
    img: "techLeadLogo",
    linkText: "Go lead",
    linkTo: "https://techleadcompass.com/",
  },
  {
    title: "Smashing Magazine",
    description:
      "Loads of interesting articles on design and programming, and the website is beautiful!",
    img: "smashingLogo",
    linkText: "Explore smashing",
    linkTo: "https://www.smashingmagazine.com/",
  },
];

const ResourceCard = ({ title, description, img, linkTo, linkText }) => {
  return (
    <article className={`card ${styles.resourceCard}`}>
      <div className={styles.resourceImgContainer}>{img}</div>
      <h2>{title}</h2>
      <p className={styles.descriptionText}>{description}</p>
      <LinkButton linkText={linkText} linkTo={linkTo} external />
    </article>
  );
};

ResourceCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

const resourcesPageStaticQuery = graphql`
  query {
    levelUpTutorialsLogo: file(
      relativePath: { eq: "resources/levelup-tuts-logo.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    syntaxLogo: file(relativePath: { eq: "resources/syntax-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fireshipLogo: file(relativePath: { eq: "resources/fireship-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    getWavesLogo: file(relativePath: { eq: "resources/getwaves-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cssIconsLogo: file(relativePath: { eq: "resources/css-icons-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bookmarksDesignLogo: file(
      relativePath: { eq: "resources/bookmarksdesign-logo.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    overreactedLogo: file(
      relativePath: { eq: "resources/overreacted-logo.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    techLeadLogo: file(relativePath: { eq: "resources/tech-lead-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    smashingLogo: file(relativePath: { eq: "resources/smashing-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ResourcesPage;

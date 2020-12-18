import React from "react";
import { Link } from "gatsby";
import styles from "../styles/navbar.module.css";

import PersonIcon from "../icons/person-icon.svg";
import PortfolioIcon from "../icons/portfolio-icon.svg";
import CodeIcon from "../icons/code-icon.svg";
import BookIcon from "../icons/book-icon.svg";

const Navbar = () => (
  <nav className={styles.navbar}>
    <span className={styles.indexLinkContainer}>
      <Link className={styles.indexLink} to="/">
        SN
      </Link>
    </span>
    <Link className={navbarLinkClassName("/about-me")} to="/about-me">
      <PersonIcon className={styles.linkIcon} />
      <span className={styles.linkText}>{animateText("About")}</span>
    </Link>

    <Link className={navbarLinkClassName("/portfolio")} to="/portfolio">
      <PortfolioIcon className={styles.linkIcon} />
      <span className={styles.linkText}>{animateText("Portfolio")}</span>
    </Link>
    <Link
      className={`${navbarLinkClassName("/how")} ${styles.smallerFont}`}
      to="/how"
    >
      <CodeIcon className={styles.linkIcon} />
      <span className={styles.linkText}>{animateText("How I <built/> This")}</span>
    </Link>
    <Link className={navbarLinkClassName("/resources")} to="/resources">
      <BookIcon className={styles.linkIcon} />
      <span className={styles.linkText}>{animateText("Resources")}</span>
    </Link>
  </nav>
);

const navbarLinkClassName = link => {
  // To ensure Gatsby build passes https://www.gatsbyjs.org/docs/debugging-html-builds/
  if (typeof window !== `undefined`) {
    return `${styles.navbarLink} ${
      window.location.pathname === link && styles.currentPage
    }`;
  } else {
    return styles.navbarLink;
  }
};

const animateText = text => {
  const delayPerLetter = 0.3 / text.length;
  return text.split("").map((letter, index) => {
    return (<span style={{animationDelay: index * delayPerLetter + "s"}}>{letter}</span>)
  })
}

export default Navbar;

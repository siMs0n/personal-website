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
    <Link className={styles.navbarLink} to="/about-me">
      <PersonIcon className={styles.linkIcon} />
      <span className={styles.linkText}>About</span>
    </Link>
    <Link className={styles.navbarLink} to="/portfolio">
      <PortfolioIcon className={styles.linkIcon} />
      <span className={styles.linkText}>Portfolio</span>
    </Link>
    <Link className={`${styles.navbarLink} ${styles.smallerFont}`} to="/how">
      <CodeIcon className={styles.linkIcon} />
      <span className={styles.linkText}>How I {"<built/>"} This</span>
    </Link>
    <Link className={styles.navbarLink} to="/resources">
      <BookIcon className={styles.linkIcon} />
      <span className={styles.linkText}>Resources</span>
    </Link>
  </nav>
);

export default Navbar;

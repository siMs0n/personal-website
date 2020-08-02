import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import styles from "../styles/linkButton.module.css";

const LinkButton = ({ linkTo, linkText }) => (
  <Link className={styles.linkButton} to={linkTo}>
    {linkText}
  </Link>
);

LinkButton.propTypes = {
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default LinkButton;

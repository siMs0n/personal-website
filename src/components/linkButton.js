import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import styles from "../styles/linkButton.module.css";

const LinkButton = ({
  linkTo,
  linkText,
  backgroundColor,
  external,
  download,
}) => {
  if (external || download) {
    return (
      <a
        href={linkTo}
        className={styles.linkButton}
        style={{ backgroundColor }}
        target="blank"
        rel="noopener noreferrer"
        download={download}
      >
        {linkText}
      </a>
    );
  } else {
    return (
      <Link
        className={styles.linkButton}
        to={linkTo}
        style={{ backgroundColor }}
      >
        {linkText}
      </Link>
    );
  }
};

LinkButton.propTypes = {
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  external: PropTypes.bool,
  download: PropTypes.bool,
};

LinkButton.defaultProps = {
  external: false,
};

export default LinkButton;

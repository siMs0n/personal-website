import React from "react";
import PropTypes from "prop-types";

import Navbar from "./navbar";
import Footer from "./footer";
import "./layout.css";
import "../styles/layout.module.css";

const Layout = ({ mainClassName, children }) => {
  return (
    <>
      <Navbar />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  mainClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;

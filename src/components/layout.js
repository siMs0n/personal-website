/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import Navbar from "./navbar";
import Footer from "./footer";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1920,
          padding: `3rem 6rem 0`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

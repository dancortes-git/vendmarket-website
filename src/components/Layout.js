import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Layout.css";

import Header from './Header';
import Footer from './Footer';

const Layout = ({
  children,
  legalInfo,
  menuItems,
  langTextMap,
  langKey,
  defaultLang,
  copyright,
  pageNotFound,
}) => {
  return (
    <>
      <Header
        legalInfo={legalInfo}
        menuItems={menuItems}
        langTextMap={langTextMap}
        langKey={langKey}
        defaultLang={defaultLang}
        pageNotFound={pageNotFound}
        />
      <main>{children}</main>
      <Footer
        legalInfo={legalInfo}
        copyright={copyright}
        pageNotFound={pageNotFound}
        />
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  legalInfo: PropTypes.string,
  menuItems: PropTypes.array,
  langTextMap: PropTypes.object,
  langKey: PropTypes.string,
  defaultLang: PropTypes.string,
  copyright: PropTypes.string,
  pageNotFound: PropTypes.bool,
};

Layout.defaultProps = {
  langKey: "pt-BR",
  defaultLang: "pt-BR",
  langTextMap: {},
};

export default Layout;

import React from "react";
import PropTypes from "prop-types";
import { NavDropdown } from "react-bootstrap";
import { FaGlobe } from "react-icons/fa";
import { Link } from "gatsby";
import getBaseUrl from "../utils/getBaseUrl";

import './LanguageSelector.css'

const LanguageSelector = ({ langTextMap, langKey, defaultLang, legalInfo }) => {
  const getUrl = (defaultLanguage, language, legal) => {
    if (legalInfo) {
      return `${getBaseUrl(defaultLanguage, language)}${legal}`
    } else {
      return `${getBaseUrl(defaultLanguage, language)}`
    }
  }
  return (
    <NavDropdown
      title={
        <>
          <FaGlobe />
          {` ${langTextMap[langKey]}`}
        </>
      }
      id="basic-nav-dropdown"
      className="language-selector"
      alignRight>
      {Object.keys(langTextMap).map((key) =>
        <Link
          key={key}
          to={getUrl(defaultLang, key, legalInfo)}
          className={`dropdown-item ${key === langKey? "active": ""}`}
        >
        {langTextMap[key]}
      </Link>
      )}
    </NavDropdown>
  );
};

LanguageSelector.propTypes = {
  langTextMap: PropTypes.object,
  langKey: PropTypes.string,
  defaultLang: PropTypes.string,
};

export default LanguageSelector;
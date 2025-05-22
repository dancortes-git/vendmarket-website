import React, {useState} from "react"
import PropTypes from "prop-types";
import { Nav, Navbar } from "react-bootstrap"
import { animateScroll } from "react-scroll"
import { Link } from 'gatsby';
import logo from '../images/logo.png'
import './Header.css';

import NavItem from './NavItem';
import LanguageSelector from './LanguageSelector'

const Header = ({ legalInfo, menuItems, langTextMap, langKey, defaultLang, pageNotFound }) => {
  const [navExpanded, setNavExpanded] = useState(false);
  const closeNav = () => setNavExpanded(false);
  const LinkOrEmpty = ({legal, to, notFound, children}) => {
    if (legal || notFound) {
      return (
        <Link to={to} className="d-flex align-items-center link-home">
          {children}
        </Link>
      )
    } else {
      return <>{children}</>
    }
  }

  return (
    <header>
      <Navbar
        onToggle={setNavExpanded}
        expanded={navExpanded}
        expand="lg"
        fixed="top"
        className="header px-5"
        variant="dark">
        <Navbar.Brand
          onClick={() => (!legalInfo && !pageNotFound) && animateScroll.scrollToTop()}
          className="d-flex align-items-center cursor-pointer">
          <LinkOrEmpty
            legal={legalInfo}
            notFound={pageNotFound}
            to={defaultLang === langKey ? "/" : `/${langKey}`}>
            <div>
              <img
                alt="Vendmarket"
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
            </div>
            <div className="pl-2 font-italic font-weight-bold link-home">Vendmarket</div>
          </LinkOrEmpty>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex flex-grow-1 justify-content-end">
            {(!legalInfo && !pageNotFound) && menuItems.map(item =>
              <NavItem
                key={item.section}
                to={item.section}
                onClick={closeNav}
                className="link-home">
                {item.label}
              </NavItem>
            )}
            {!pageNotFound &&
              <LanguageSelector
                langKey={langKey}
                defaultLang={defaultLang}
                langTextMap={langTextMap}
                legalInfo={legalInfo} />
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  legalInfo: PropTypes.string,
  menuItems: PropTypes.array,
  langTextMap: PropTypes.object,
  langKey: PropTypes.string,
  defaultLang: PropTypes.string,
  pageNotFound: PropTypes.bool,
};

export default Header

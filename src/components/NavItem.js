import React from "react";
import PropTypes from "prop-types";

import { Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const NavItem = ({ to, onClick, children }) => {
  return (
    <Nav.Item>
      <Link
        className="nav-link cursor-pointer pr-3"
        activeClass="active"
        to={to}
        spy
        smooth="easeInOutQuart"
        offset={-60}
        onClick={onClick}
      >
        {children || to}
      </Link>
    </Nav.Item>
  );
};

NavItem.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

NavItem.defaultProps = {
  to: "",
  onClick: null,
  children: null,
};

export default NavItem;
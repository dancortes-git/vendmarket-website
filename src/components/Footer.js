import React from "react"
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap"
import './Footer.css';

const Footer = ({ copyright }) => (
  <footer className="footer text-center py-3">
    <Container>
      <Row>
        <Col>
          <span className="text-muted">{copyright}</span>
        </Col>
      </Row>
    </Container>
  </footer>
)

Footer.propTypes = {
  copyright: PropTypes.string,
};

export default Footer

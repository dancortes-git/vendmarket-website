import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types";
import './What.css';

const What = ({ title, description }) =>  {
  return (
    <section
      id="what"
      className="text-center section-what">
      <Container>
        <Row>
          <Col className="py-5 my-5">
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col className="p-3">
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

What.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default What

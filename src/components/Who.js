import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types";
import './Who.css';

const Who = ({ title, description }) =>  {
  return (
    <section
      id="who"
      className="text-center section-who">
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

Who.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Who

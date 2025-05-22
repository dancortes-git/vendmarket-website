import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types";
import './How.css';

import { FaCommentDots } from "react-icons/fa";
import { FaAtom } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const How = ({ title, mission, values, vision }) =>  {
  return (
    <section
      id="how"
      className="text-center section-how">
      <Container>
        <Row>
          <Col className="py-5 my-5">
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row className="p-3">
          <Col sm={12} lg={4}>
            <div className="pb-3"><FaCommentDots size="60"/></div>
            <h2 className="pb-3">{mission.title}</h2>
            <p className="pb-5">{mission.description}</p>
          </Col>
          <Col sm={12} lg={4}>
            <div className="pb-3"><FaAtom size="60"/></div>
            <h2 className="pb-3">{values.title}</h2>
            <p className="pb-5">{values.description}</p>
          </Col>
          <Col sm={12} lg={4}>
            <div className="pb-3"><FaEye size="60"/></div>
            <h2 className="pb-3">{vision.title}</h2>
            <p className="pb-5">{vision.description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

How.propTypes = {
  title: PropTypes.string,
  mission: PropTypes.object,
  values: PropTypes.object,
  vision: PropTypes.object,
};

export default How

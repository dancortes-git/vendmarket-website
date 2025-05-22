import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types";
import './Contact.css';

import { FaWhatsapp } from "react-icons/fa";
import { FaAt } from "react-icons/fa";

const Contact = ({ title, description, phone, whatslink, email }) => (
  <section
    id="contact"
    className="text-center section-contact">
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
      <Row>
        <Col sm={12} lg={6} className="py-5">
          <a href={whatslink} target="_blank" rel="noreferrer">
            <FaWhatsapp size="60"/>
          </a>
          <div className="contact mt-4">
            <a href={whatslink} target="_blank" rel="noreferrer">{phone}</a>
          </div>
        </Col>
        <Col sm={12} lg={6} className="py-5 mb-5">
          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
              <FaAt size="60"/>
          </a>
          <div className="contact mt-4">
            <a href={`mailto:${email}`} target="_blank" rel="noreferrer">{email}</a>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
)

Contact.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  phone: PropTypes.string,
  whatslink: PropTypes.string,
  email: PropTypes.string,
};

export default Contact

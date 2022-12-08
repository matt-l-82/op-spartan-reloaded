import React from "react";
import { images } from "../../constants/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CoreServices.scss";

const CoreServices = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={6} lg={9}>
          <p className="core__services">Core Services</p>
          <h2 className="core__services-title">
            How we better serve each other, together
          </h2>
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={3}
          className="membership justify-content-around text-center"
        >
          <img src={images.membership} alt="membership" />
          <h3 className="membership__title">membership</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>1 of 4</Col>
        <Col xs={6}>2 of 4</Col>
        <Col xs={6}>3 of 4</Col>
        <Col xs={6}>4 of 4</Col>
      </Row>
    </Container>
  );
};

export default CoreServices;

import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'yellow' }}>
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'blue' }}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'orange' }}>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'red' }}>
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'black' }}>
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;

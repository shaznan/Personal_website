import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiVisualstudiocode,
  SiGithub,
  SiPostman,
  SiAdobexd,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading aboutheading" style={{ zIndex: +3 }}>
        Programming <strong className="yellow">Tools</strong>
      </h1>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd />
      </Col>
    </Row>
  );
}

export default Toolstack;

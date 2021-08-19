import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiVisualstudiocode,
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
        <SiWindows className="icon-logo" style={{ color: "white" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode
          className="icon-logo"
          style={{ color: "#0078d7" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman className="icon-logo" style={{ color: "#ff5e00" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd className="icon-logo" style={{ color: "#ff00ee" }} />
      </Col>
    </Row>
  );
}

export default Toolstack;

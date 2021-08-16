import { fontSize } from "@material-ui/system";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiMongodb, DiGit } from "react-icons/di";
import {
  SiPytorch,
  SiTensorflow,
  SiFirebase,
  SiNextDotJs,
  SiMaterialUi,
  SiBootstrap,
  SiSass,
  SiHtml5,
  SiCss3,
  SiAdobeillustrator,
  SiAdobepremiere,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobeaftereffects,
  SiMicrosoftoffice,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className=" aboutheading" style={{ zIndex: +3 }}>
        Professional <strong className="yellow">Skillset </strong> in
        programming
      </h1>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextDotJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7" }}>
          (basics)
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialUi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSass />
      </Col>
      <h1 className=" aboutheading" style={{ zIndex: +3 }}>
        Other <strong className="yellow">Skillset </strong>{" "}
      </h1>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeindesign />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremiere />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>
    </Row>
  );
}

export default Techstack;

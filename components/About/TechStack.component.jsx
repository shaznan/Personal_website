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
        <DiJavascript1 className="icon-logo" style={{ color: "#faeb14" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="icon-logo" style={{ color: "#61DBFB" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextDotJs className="icon-logo" style={{ color: "#8000ff" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="icon-logo" style={{ color: "#4DB33D" }} />
        <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7" }}>
          (basics)
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="icon-logo" style={{ color: "#F1502F" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialUi className="icon-logo" style={{ color: "#17d1ff" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap className="icon-logo" style={{ color: "#602C50" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 className="icon-logo" style={{ color: "#e34c26" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 className="icon-logo" style={{ color: "#264de4" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSass className="icon-logo" style={{ color: "#b37399aa" }} />
      </Col>
      <h1 className=" aboutheading" style={{ zIndex: +3 }}>
        Other <strong className="yellow">Skillset </strong>{" "}
      </h1>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator
          className="icon-logo"
          style={{ color: "#24f7eb" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeindesign className="icon-logo" style={{ color: "#562F44" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop className="icon-logo" style={{ color: "#ec640f" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremiere className="icon-logo" style={{ color: "#ED2224" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects
          className="icon-logo"
          style={{ color: "#CF96FD" }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice className="icon-logo" style={{ color: "#f25022" }} />
      </Col>
    </Row>
  );
}

export default Techstack;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Resumecontent from "./ResumeContent";
// import axios from "axios";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../components/Particle.component";

import Education from "../components/Resume/Education.component";
import NavBar from "../components/CommonLayout/Navbar/Navbar";
import Experience from "../components/Resume/Experience.component";

function resume() {
  return (
    <div className="resume-section">
      <Particle />
      <NavBar />
      {/* <Container> */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          style={{ width: "10rem" }}
          className="download-btn"
          href={
            "https://drive.google.com/file/d/1QHlR-4RnU_-4DXI1kinlMoGP2EH05wg5/view"
          }
          target="_blank">
          <AiOutlineDownload
            style={{ marginRight: "0.5rem", backgroundColor: "transparent" }}
          />
          Download CV
        </Button>
      </Row>
      <Row className="resume">
        <Col md={6} className="resume-left">
          <Education />
        </Col>
        <Col md={6} className="resume-right">
          <Experience />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          style={{ width: "10rem" }}
          className="download-btn"
          href={
            "https://drive.google.com/file/d/1QHlR-4RnU_-4DXI1kinlMoGP2EH05wg5/view"
          }
          target="_blank">
          <AiOutlineDownload
            style={{ marginRight: "0.5rem", backgroundColor: "transparent" }}
          />
          Download CV
        </Button>
      </Row>
      {/* </Container> */}
    </div>
  );
}

export default resume;

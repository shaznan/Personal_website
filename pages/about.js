import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle.component";
// import Techstack from "./Techstack";
// import Toolstack from "./Toolstack";
import NavBar from "../components/CommonLayout/Navbar/Navbar";
import MainDescription from "../components/About/MainDescription.component";
import MainImage from "../components/About/MainImage.component";
import Mystory from "../components/About/Mystory.component";
import Skillset from "../components/About/Skillset.component";
import Techstack from "../components/About/TechStack.component";
import Toolstack from "../components/About/Toolstack.component";

function About() {
  return (
    <Container fluid className="about-section">
      <NavBar />
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <MainDescription />
          <MainImage />
        </Row>
        <Mystory />
        <Techstack />
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;

import React from "react";
import NavBar from "../components/CommonLayout/Navbar/Navbar";
import { Container, Row } from "react-bootstrap";
import Particle from "../components/Particle.component";
import MainHeading from "../components/Projects/MainHeading.component";
import ProjectList from "../components/Projects/ProjectList.component";
import DesignList from "../components/Projects/DesignList.component";

function Projects() {
  return (
    <Container fluid className="project-section">
      <NavBar />
      <Particle />
      <Container>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}>
          <MainHeading
            mainHeading="My Recent"
            headinghighlight="Works"
            description="Here are a few projects I've worked on recently."
          />
          <ProjectList />
          <MainHeading
            mainHeading="Graphic design and Motion graphics"
            headinghighlight="Work"
            description="Here are a few of my designing work I have worked in the past"
          />
          <DesignList />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

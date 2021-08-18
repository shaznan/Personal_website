import React from "react";
import NavBar from "../components/CommonLayout/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle.component";
import ProjectCard from "../components/Projects/ProjectCard.component";
import MainHeading from "../components/Projects/MainHeading.component";
// import speechTherapy from "../assets/images/SpeechTherapy.png";
// import calculize from "../assets/images/calculize-app.png";
// import todolist from "../assets/images/tutu-todolist.png";
import speechtherapy from "../assets/images/speechtherapygif.gif";
import calculize from "../assets/images/calculize.gif";
import todolist from "../assets/images/tudoapp.gif";

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
          <MainHeading />

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={speechtherapy}
              title="SpeechTherapy App"
              description={[
                "SpeechTherapy has been my ",
                <span className="yellow">main project</span>,
                " that I have been working on using Nextjs. It is a web app built to detect BrainFog (a type of cognitive dysfunction) amongst individuals by performing verbal fluency tests.",
              ]}
              githubLink="https://github.com/shaznan/speech-therapy-app"
              liveProject="https://speechtherapy.vercel.app/"
              videoDemo="www.youtube.com"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={calculize}
              title="Calculize App"
              description="A fun and basic calculator app built from scratch using vanillajs"
              githubLink="https://github.com/shaznan/Calculize-App"
              liveProject="https://calculize-app.netlify.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={todolist}
              title="Tutu Todo App"
              description="A todo list app built using Vanillajs"
              githubLink="https://github.com/shaznan/Tutu-To-do-list"
              liveProject="https://tutu-todolist.netlify.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              title="More Projects"
              description="Apart from the above, I have worked on several mini projects which you can find on Github"
              githubLink="https://github.com/shaznan"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

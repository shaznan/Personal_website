import React, { Fragment } from "react";
import speechtherapy from "../../assets/images/speechtherapygif.gif";
import calculize from "../../assets/images/calculize.gif";
import todolist from "../../assets/images/tudoapp.gif";
import ProjectCard from "./ProjectCard.component";
import { Col } from "react-bootstrap";

function ProjectList() {
  return (
    <Fragment>
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
          videoDemo="https://www.youtube.com/watch?v=HReX4oKdBPE&t=29s"
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
    </Fragment>
  );
}

export default ProjectList;

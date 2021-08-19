import React, { Fragment } from "react";
import ProjectCard from "./ProjectCard.component";
import { Col } from "react-bootstrap";

function DesignList() {
  return (
    <Fragment>
      <Col md={6} className="project-card">
        <ProjectCard
          title="Motion Graphics"
          description="An animated video conveying the services offered by a company"
          video="https://www.youtube.com/watch?v=rKYdETC5SzAhttps://github.com/shaznan"
        />
      </Col>
      <Col md={6} className="project-card">
        <ProjectCard
          title="Graphic Design"
          description="A list of my previous work"
          website="https://shaznandesignportfolio.netlify.app/"
        />
      </Col>
    </Fragment>
  );
}

export default DesignList;

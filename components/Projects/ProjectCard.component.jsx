import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillGithub } from "react-icons/ai";
import { CgMediaLive } from "react-icons/cg";
import { ImPlay2 } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";

function ProjectCard({
  imgPath = null,
  title,
  description,
  githubLink = null,
  liveProject,
  videoDemo = null,
  video = null,
  website = null,
}) {
  return (
    <Card className="project-card-view">
      {imgPath && <Image src={imgPath} />}
      <Card.Body style={{ padding: "2rem" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
          {description}
        </Card.Text>
        {githubLink && (
          <Button href={githubLink} target="_blank" className="projectbtn">
            <AiFillGithub
              style={{ backgroundColor: "transparent", color: "#f00c7a" }}
            />{" "}
            &nbsp; Github Repo
          </Button>
        )}
        {liveProject && (
          <Button
            href={liveProject}
            target="_blank"
            className="projectbtn"
            style={{ marginLeft: "1rem", backgroundColor: "red" }}>
            <CgMediaLive
              style={{ backgroundColor: "transparent", color: "#4eeded" }}
            />{" "}
            &nbsp; Live Project
          </Button>
        )}
        {videoDemo && (
          <Button
            href={videoDemo}
            target="_blank"
            className="projectbtn"
            style={{ marginLeft: "1rem" }}>
            <ImPlay2 style={{ backgroundColor: "transparent", color: "red" }} />{" "}
            &nbsp; Project Video Demo
          </Button>
        )}
        {video && (
          <Button
            href={video}
            target="_blank"
            className="projectbtn"
            style={{ marginLeft: "1rem" }}>
            <ImPlay2 style={{ backgroundColor: "transparent", color: "red" }} />{" "}
            &nbsp; Play Video
          </Button>
        )}
        {website && (
          <Button
            href={website}
            target="_blank"
            className="projectbtn"
            style={{ marginLeft: "1rem" }}>
            <CgWebsite
              style={{ backgroundColor: "transparent", color: "#4eeded" }}
            />{" "}
            &nbsp; View Portfolio
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;

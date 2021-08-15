import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../../../assets/images/profile_image.png";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../../Particle.component";

function IntroductionBody() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
      style={{ zIndex: 5 }}>
      <Container>
        <Particle />
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              <br />I am fluent in stuff like
              <b className="yellow">
                {" "}
                javascript, JAVASCRIPT & yeah, you guessed it! JavaScript! ☕
              </b>
              <br />
              <br />
              My field of Interest's are building
              <b className="yellow"> Web Technologies </b> to make people's
              lives better
              <br />
              <br />I love programming so much, that i had to switch careers
              from a financial background 😅, sounds like a miraculous
              transformation? well it wasn't. It was the culmination of a long
              and <b className="yellow"> interesting journey</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Image
              src={profileImg}
              alt="myimage"
              width="300px"
              height="300px"
            />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="yellow">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shaznan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <AiFillGithub className="icons" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shaznan-fairoze-40a71715b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons">
                  <FaLinkedinIn className="icons" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default IntroductionBody;

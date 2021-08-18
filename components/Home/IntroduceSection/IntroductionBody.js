import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../../../assets/images/profile_image.png";
import Image from "next/image";
import Particle from "../../Particle.component";
import Description from "./Description.component";
import Social from "./Social.component";

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
          <Description />
          <Col md={4} className="myAvtar">
            <Image
              src={profileImg}
              alt="myimage"
              width="325px"
              height="300px"
              className="profilepic"
            />
          </Col>
        </Row>
        <Row>
          <Social />
        </Row>
      </Container>
    </Container>
  );
}
export default IntroductionBody;

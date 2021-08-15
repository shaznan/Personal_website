import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle.component";
import Body from "../components/Home/MainSection/Body";
import IntroductionBody from "../components/Home/IntroduceSection/IntroductionBody";
import Navbar from "../components/CommonLayout/Navbar/Navbar";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Container fluid className="home-section" id="home">
        <Body />
      </Container>
      <IntroductionBody />
    </section>
  );
}

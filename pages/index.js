// import styles from '../styles/Home.module.css'
import React from "react";
import { Container } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import Particle from "../components/Home/MainSection/Particle.component";
// import Home2 from "./Home2";
import Body from "../components/Home/MainSection/Body";

export default function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Body />
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

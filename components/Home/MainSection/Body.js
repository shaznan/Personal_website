import React, { Fragment } from "react";
import Text from "./Text.component";
import { Container, Row } from "react-bootstrap";
import MainImage from "./Image.component";
import Particle from "../../Particle.component";

function Homepage_Body() {
  return (
    <Fragment>
      <Container className="home-content">
        <Particle />
        <Row>
          <Text />
          <MainImage />
        </Row>
      </Container>
    </Fragment>
  );
}

export default Homepage_Body;

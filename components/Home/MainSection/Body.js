import React, { Fragment } from "react";
import Text from "./Text.component";
import { Container, Row } from "react-bootstrap";
import MainImage from "./Image.component";

function Homepage_Body() {
  return (
    <Fragment>
      <Container className="home-content">
        <Row>
          <Text />
          <MainImage />
        </Row>
      </Container>
    </Fragment>
  );
}

export default Homepage_Body;

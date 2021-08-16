import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StoryTimeline from "./StoryTimeline.component";

function Mystory() {
  return (
    <Fragment>
      <div style={{ zIndex: +10 }}>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 className="aboutheading">
            My Interesting<strong className="yellow"> Story </strong>
          </h1>
          <Col md={12} className="about-img story_cont">
            <StoryTimeline />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default Mystory;

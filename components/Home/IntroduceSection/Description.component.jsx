import React, { Fragment } from "react";
import { Col } from "react-bootstrap";

function Description() {
  return (
    <Fragment>
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
          <b className="yellow"> Web Technologies </b> to make people's lives
          better
          <br />
          <br />I love programming so much, that i had to switch careers from a
          financial background 😅, sounds like a miraculous transformation? well
          it wasn't. It was the culmination of a long and{" "}
          <b className="yellow"> interesting journey</b>
        </p>
      </Col>
    </Fragment>
  );
}

export default Description;

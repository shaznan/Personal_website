import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";

function MainDescription() {
  return (
    <Fragment>
      <Col
        md={7}
        style={{
          justifyContent: "center",
          paddingTop: "30px",
          paddingBottom: "50px",
          zIndex: +5,
        }}>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
          Know <strong className="yellow">Me </strong>
        </h1>
        <Aboutcard />
      </Col>
    </Fragment>
  );
}

export default MainDescription;

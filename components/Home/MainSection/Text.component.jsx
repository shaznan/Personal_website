import React, { Fragment } from "react";
import DynamicText from "./DynamicText.component";
import { Col } from "react-bootstrap";

//display static greeting text

function Maintext() {
  return (
    <Fragment>
      <Col md={7} className="home-header">
        <h1 style={{ paddingBottom: 15 }} className="heading">
          Hey There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className="heading-name">
          I'M
          <strong className="main-name"> SHAZNAN FAIROZE</strong>
        </h1>

        <div style={{ padding: 50, textAlign: "left" }}>
          <DynamicText />
        </div>
      </Col>
    </Fragment>
  );
}

export default Maintext;

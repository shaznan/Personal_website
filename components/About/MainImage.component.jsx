import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import aboutImage from "../../assets/images/aboutpage_main-01.png";
import Image from "next/image";

function MainImage() {
  return (
    <Fragment>
      <Col
        md={5}
        style={{
          paddingTop: "120px",
          paddingBottom: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
        }}
        className="about-img">
        <Image
          src={aboutImage}
          alt="image"
          className="img-fluid"
          width="700px"
          height="700px "
        />
      </Col>
    </Fragment>
  );
}

export default MainImage;

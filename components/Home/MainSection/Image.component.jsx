import React from "react";
import { Fragment } from "react";
import { Col } from "react-bootstrap";
import bgImage from "../../../assets/images/Homepage_main.png";
import Image from "next/image";

//Display main image
function MainImage() {
  return (
    <Fragment>
      <Col md={5} style={{ paddingBottom: 20 }}>
        <Image src={bgImage} alt="home_pic" className="img-fluid" width={500} />
      </Col>
    </Fragment>
  );
}

export default MainImage;

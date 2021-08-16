import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Social() {
  return (
    <Fragment>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="yellow">connect </span>with me
        </p>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/shaznan"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons">
              <AiFillGithub className="icons" />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/shaznan-fairoze-40a71715b"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons">
              <FaLinkedinIn className="icons" />
            </a>
          </li>
        </ul>
      </Col>
    </Fragment>
  );
}

export default Social;

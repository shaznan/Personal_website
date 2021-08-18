import React, { Fragment } from "react";

function MainHeading() {
  return (
    <Fragment>
      <div style={{ zIndex: 3, textAlign: "center" }}>
        <h1 className="project-heading">
          My Recent <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
      </div>
    </Fragment>
  );
}

export default MainHeading;

import React, { Fragment } from "react";

function MainHeading({ mainHeading, headinghighlight, description }) {
  return (
    <Fragment>
      <div style={{ zIndex: 3, textAlign: "center" }}>
        <h1 className="project-heading">
          {mainHeading} <strong className="yellow">{headinghighlight} </strong>
        </h1>
        <p style={{ color: "white" }}>{description}</p>
      </div>
    </Fragment>
  );
}

export default MainHeading;

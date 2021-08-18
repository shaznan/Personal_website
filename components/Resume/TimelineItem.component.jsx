import React from "react";
import { Fragment } from "react-is";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

function Experience({ title, year, subtitle, description }) {
  return (
    <Fragment>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <span style={{ fontWeight: "bold", color: "#c99806" }}>{title}</span>
          <br />
          <span style={{ fontStyle: "italic" }}>{year}</span>
          <br />
          <span>{subtitle}</span>
          <br />
          <br />
          <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)" }}>
            {description}
          </span>
        </TimelineContent>
      </TimelineItem>
    </Fragment>
  );
}

export default Experience;

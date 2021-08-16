import { Fragment } from "react-is";
import React from "react";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { fontSize } from "@material-ui/system";

function StoryEvent({ description, event, icon, Number }) {
  return (
    <Fragment>
      <TimelineItem style={{ backgroundColor: "transparent" }}>
        <TimelineOppositeContent>
          <span className="numbers">{Number}</span>
          {/* style={{ color: "rgba(255,255,255,0.8)", fontSize: "4rem" }} */}
          <span className="storyicons">{icon}</span>
          {/* <Typography color="textSecondary">{year}</Typography> */}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography style={{ fontWeight: "bold", color: "#ffc107" }}>
            {event}
          </Typography>
          <Typography style={{ color: "rgba(255,255,255, 0.8)" }}>
            {description}
          </Typography>
          {/* <Image src={img} width="200px" height="200px" alt="image" /> */}
        </TimelineContent>
      </TimelineItem>
    </Fragment>
  );
}

export default StoryEvent;

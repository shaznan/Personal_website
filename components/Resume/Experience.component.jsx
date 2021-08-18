import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "./TimelineItem.component";

export default function Education() {
  return (
    <Timeline>
      <h3 className="resume-title" style={{ zIndex: +5, textAlign: "center" }}>
        Experience
      </h3>
      <TimelineItem
        title="Digital Marketing content creator"
        year="2020 Jan - 2021 Feb"
        subtitle="Echo Media (Pvt) Ltd"
        description="Responsible for creating on demand Motion Graphics video
content
Responsible for creation of all graphical related content
for the business such as poster, banners, social media
feed posts, social media posts, graphical illustrations"
      />
      <TimelineItem
        title="INVESTMENT ADVISOR"
        year="2019 Jan - October"
        subtitle="JB Securities (Pvt) Ltd"
        description="Liaising with clients to help them make better decisions on
stock picks
Providing brokerage services to existing and new clients.
Sales pitching to bring in new clients into the market &
pitching available unit trust funds oered by the company.
Lead generation of potential prospects
Helping clients make sound investment decisions with the
available investment options in the market"
      />
      <TimelineItem
        title="BILLING EXECUTIVE"
        year="2017July –2018 Oct"
        subtitle="Tseyva (Pvt) Ltd"
        description="Invoicing of wholesale customers
Vendor invoice Reconciliation
Recording payment received and sent
Preparing payment & sending out wire copies once payment
is processed
Requesting due payments from Vendors
Responding to billing related queries"
      />
      <TimelineItem
        title="SCHOOL OF COMPUTING"
        year="2008-2010"
        subtitle="INFOTEC
School"
        description="Graphic desigining, Web development, Web Designing, Microsoft office"
      />
      <TimelineItem
        title="SCHOOL"
        year="2001 - 2014"
        subtitle="Leighton Park International
School"
        description="IGCSE Ordinary Level, 8 subjects including English & mathe-
matics (4A*, 2A, 1B, 1C)"
      />
    </Timeline>
  );
}

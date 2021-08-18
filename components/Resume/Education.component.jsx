import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "./TimelineItem.component";

export default function Education() {
  return (
    <Timeline>
      <h3 className="resume-title" style={{ zIndex: +1, textAlign: "center" }}>
        Education
      </h3>
      <TimelineItem
        title="BA (HONS) BUSINESS MANAGEMENT"
        year="2018 Jan – 2018 Oct"
        subtitle="University of Greenwich (UK)"
        description="Included, Dissertation, International Business Management,
Accounting, Economics, Management in Critical Context,
International Business Strategy, Personal & Professional
Development, Leadership in Organizations."
      />
      <TimelineItem
        title="HND IN BUSINESS MANAGEMENT"
        year="2016 Jan – 2017 June"
        subtitle="Cardi Metropolitan University"
        description="Included Accounting and costing for business, Business
Environment, Human Resource Management, Managing
Communication knowledge and information, Marketing
principles, Organization behavior, People and organization,
self and career development, Financial Management,
International business, Statistics for business and strategic
management, Research and development, Money and
Banking, Risk Management."
      />
      <TimelineItem
        title="FOUNDATION"
        year="2014 Nov–2015 June"
        subtitle="APIIT Lanka"
        description="Included Personal communication skills, Social skills, further
mathematics, Introduction to business, Introduction to web
development, International Business, Accounting."
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

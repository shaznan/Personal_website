import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import StoryEvent from "./StoryEvent.component";
import { Fragment } from "react-is";
import { FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { ImPen } from "react-icons/im";
import { HiCode } from "react-icons/hi";

export default function StoryTimeline() {
  return (
    <Fragment>
      <Timeline align="alternate">
        <StoryEvent
          event="Graduated from school right after acing my Ordinary Level"
          description="I was full-on energetic and ready to take my next step into university life. The only problem I had, just like the majority, is not knowing what career path to take. "
          icon={<FaSchool />}
          Number="1"
        />
        <StoryEvent
          event="Decided to go ahead with Business Management (BM) as my career path"
          description={[
            " As a 16-year-old, I was inexperienced to make a career decision.",
            <br />,
            <br />,
            "Growing up, I was a technology enthusiast. I used to help my dad by creating logos, create experimental websites using all 7 rainbow colors on one page, and even mess around with google's landing page source code.",
            <br />,
            <br />,
            "But, I never took IT seriously back then and wanted to follow the traditional path, so I went ahead with the advice given by my family members to go ahead with BM without taking my interests and skills into consideration ",
          ]}
          icon={<MdSchool />}
          Number="2"
        />
        <StoryEvent
          event="Worked in the Financial industry for 2+ years"
          description="After graduating from BM specializing in finance, I worked as a billing executive in the VOIP industry and later on moved into the stock industry putting all the knowledge I gained from college into work. "
          icon={<MdWork />}
          Number="3"
        />
        <StoryEvent
          event="Resigned and took a cautious exit from the Finance Industry"
          description={[
            "Up until this point, I was doing everything I had to just for the sake of it, I had no real interest.",
            <br />,
            <br />,
            "I came to a point of rethinking the choice I made as a 16-year-old, taking each and every decision making factor I have to consider including my opportunity costs, gave myself plenty of time to think, and finally decided to pursue a career change full steam ahead into front-end development",
          ]}
          icon={<ImExit />}
          Number="4"
        />
        <StoryEvent
          event="Took my first step as a graphic designer into the IT industry"
          description={[
            "Since I had existing knowledge working with designing tools, I found it easier to take my first step as a Graphic designer and gradually work my way into UI designing, learning designing practices as well as the latest trends in the industry.",
            <br />,
            <br />,
            " I freelanced and worked for a company as a designer until I became confident that I could move into the fun part of front end which is coding!",
          ]}
          icon={<ImPen />}
          Number="5"
        />
        <StoryEvent
          event="Invested 6 months into Front-end Dev"
          description="I put myself into self isolation for 6 months fully commited to learning programming fulltime, 13 hours a day by being consitent and putting in all the hardwork to get to where I am now"
          icon={<HiCode />}
          Number="6"
        />
      </Timeline>
    </Fragment>
  );
}

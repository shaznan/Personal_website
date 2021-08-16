import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="yellow">Shaznan Fairoze </span>
            from <span className="purple"> Colombo, Sri lanka.</span>
            <br />
            <br />
            I'm a <span className="yellow">
              BA (HONS) Business Management
            </span>{" "}
            graduate who have been working in the{" "}
            <span className="yellow">Finance industry</span> for more than{" "}
            <span className="yellow">2 years</span> and finally decided to
            follow my passion in <span className="yellow"> programming</span> to
            reach what I felt was my potential.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

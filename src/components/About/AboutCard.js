import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ritik Yadav </span>
            from <span className="purple"> Kharagpur, West Bengal, India.</span>
            <br />
            I am currently employed as a software developer at <span className="purple">PwC Bangalore.</span>
            <br />
            I have completed My bachelor of technology from Silicon Institute of Technology, Bhubaneshwar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Investment knowdledge
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “I believe that I can make a difference.”{" "}
          </p>
          <footer className="blockquote-footer">Ritik Yadav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

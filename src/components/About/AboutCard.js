import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Xian Klein </span>
            from <span className="purple"> Montreal, Canada.</span>
            <br /> I have graduated the University of Montreal and received 
            Bachelor degree of Computer Science.
            <br />
            Additionally, I have just currently employed as a DevOps Engineer at
            Jefferson Frank.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Scuba Diving
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel
            </li>
            <li className="about-activity">
              <ImPointRight /> Soccer
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passion, Practice and Progress lead you to Success!"{" "}
          </p>
          <footer className="blockquote-footer">Xian Klein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

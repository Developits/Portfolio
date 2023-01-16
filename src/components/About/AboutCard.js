import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Md.Nahidul Islam </span>
            from <span className="purple"> Brahmanbaria, Bangladesh.</span>
            <br />I am learning web development and working on my projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blog
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only impossible journey is the one you never begin!"
          </p>
          <footer className="blockquote-footer">Tony Robbins</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

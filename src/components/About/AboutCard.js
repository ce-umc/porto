import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Someone</span>{" "}
            from <span className="purple">Indonesia</span>.
            <br />
            I’m currently studying{" "}
            <span className="purple"></span> at{" "}
            <span className="purple">the Muhammadiyah University of Cirebon</span>.
            <br />I am a member of{" "}
            <span className="purple">Computer Education</span>
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(102 172 126)" }}>
            "We work the talk, not only talk the talk!"{" "}
          </p>
          <footer className="blockquote-footer">Someone</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

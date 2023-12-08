import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../Assets/my img.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              A React developer with a year’s worth of expertise and a solid
              foundation in web application development. Actively seeking
              development to increase growth and improvement. Devoted
              professional with a strong desire to build flawless user
              experiences and a tireless push to advance technical knowledge.
              <br />
              <br />I have good hands-on practice in language like
              <i>
                <b className="purple"> C++, Javascript</b>
                <br />
              </i>
                and have a good understanding of Mordern Javascript Library like
              <i>
                <b className="purple"> React Js </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">prompt engineering</b>
              </i>
              <br />
              <br />
              Currently I am learning javascript Frameworks like <b className="purple">Next Js</b> to make
              my development journey more smooth and faster.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={img} style={{borderRadius: "10px"}} className="img-fluid w-50 " alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RITIKY"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/RitikYa06208314"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ritik-yadav-0a2688203/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_____r.i.t.i.k_____"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

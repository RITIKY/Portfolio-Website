import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import email from "../../Assets/Projects/email.png";
import foodapp from "../../Assets/Projects/foodapp.png";
import socialapp from "../../Assets/Projects/socialapp.png";
import netflix from "../../Assets/Projects/netflix.png";
import shopingCart from "../../Assets/Projects/shopingCart.png";
import youtube from "../../Assets/Projects/youtube.png";
import music from "../../Assets/Projects/MusicApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Gpt"
              description="The Netflix Gpt is a Netflix clone project aims to replicate the user interface and some features of the popular streaming platform Netflix. This project will be built using React.js to create a dynamic and responsive single-page application."
              ghLink="https://github.com/RITIKY/Netflix-GPT"
              demoLink="https://netflix-gpt-beige.vercel.app/browse"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Netflix Gpt"
              description="The Netflix Gpt is a Netflix clone project aims to replicate the user interface and some features of the popular streaming platform Netflix. This project will be built using React.js to create a dynamic and responsive single-page application."
              ghLink="https://github.com/RITIKY/Music-App"
              demoLink="https://ravoluzen-musix.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodapp}
              isBlog={false}
              title="Swiggy Clone"
              description="The food delivery application frontend project aims to replicate the user interface and functionality of popular platforms like Swiggy. This React-based single-page application will allow users to explore restaurants, view menus, place orders, and track deliveries."
              ghLink="https://github.com/RITIKY/Food-Order-App"
              demoLink="https://food-order-app-five-beta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialapp}
              isBlog={false}
              title="Social Media Application"
              description="The social media app frontend project aims to replicate the user interface and functionality of popular platforms like Facebook. This React-based single-page application will allow users to create profiles, connect with friends, share posts, and engage in various social interactions."
              ghLink="https://github.com/RITIKY/Social-App"
              demoLink="https://social-app-eight-omega.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopingCart}
              isBlog={false}
              title="Shopping Cart App"
              description="Creating a shopping cart application in React with Redux involves building a dynamic and interactive frontend that allows users to browse products, add them to a shopping cart, and manage their purchases."
              ghLink="https://github.com/RITIKY/Shopping-Cart-Application"
              demoLink="https://shopping-cart-application-alpha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youtube}
              isBlog={false}
              title="Youtube Clone"
              description="The YouTube clone frontend project aims to replicate the user interface and core features of the popular video-sharing platform. This React-based single-page application will allow users to search for videos, watch them, and interact with a video player."
              ghLink="https://github.com/RITIKY/YouTube-App"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={email}
              isBlog={false}
              title="Email clone"
              description="The Gmail clone frontend project aims to recreate the user interface of the popular email service Gmail. This project will be built using React.js to create a responsive and interactive single-page application for managing emails having compose mail box."
              ghLink="https://github.com/RITIKY/Gmail-Clone"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

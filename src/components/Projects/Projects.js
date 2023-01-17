import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Salvage Yard"
              description="This is an online marketplace where people and companies can purchase and sell pre-owned or refurbished smartphones.  These websites typically have a wide selection of devices from various manufacturers, including Apple, Samsung, and Xiaomi."
              ghLink="https://github.com/Developits/Reselling-product-client-side"
              demoLink="https://salvage-yard-1ab9c.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Reza Photography"
              description="An online gallery of photographers' work can be found on this website. A portfolio of the photographer's images, which may include images of landscapes, people, events, or commercial topics, is often featured on the website. The website can also include a blog or articles section"
              ghLink="https://github.com/Developits/Photographar-client-side"
              demoLink="https://reza-photography.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Code Force"
              description="This is an online learning platform that provides educational tools and content to people looking to increase their knowledge or pick up new skills. These websites often offer a broad selection of courses covering a variety of topics, including technology, business, design, etc."
              ghLink="https://github.com/Developits/Learning-platform-client"
              demoLink="https://code-force-5b4b8.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiDatabase,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'blue' }}>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'yellow' }}>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'orange' }}>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'blue' }}>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'blue' }}>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'green' }}>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'green' }}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'black'}}>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'orange' }}>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'yellow' }}>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'blue' }}>
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'yellow' }}>
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'orange' }}>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ color: 'yellow' }}>
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;

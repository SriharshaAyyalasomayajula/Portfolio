import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import picture from "../assets/img/ProfileImage.jpeg";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <h1>About</h1>
        <Row className="align-items-center justify-content-center about-row">
          <Col xs={6} md={5} xl={4} className={"about-image-div"}>
            <img src={picture} alt="harsha-pic" />
          </Col>
          <Col xs={12} md={5} xl={6}>
            <p>
              Hi,{" "}
              <span>
                <img
                  src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                  alt="hi-logo"
                />{" "}
              </span>
              I'm Sriharsha, a seasoned Unity developer with a passion for pushing the boundaries of immersive technologies. Over the past 5+, I've cultivated my skills in Unity development, specializing in Virtual Reality (VR), Augmented Reality (AR) and Game Development , while also venturing into the world of Unreal Engine and Nvidia Omniverse.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

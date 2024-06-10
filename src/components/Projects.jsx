import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Unity Projects</h2>
                  <br />
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Digital Twin</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">VR Car Showroom</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">VR Ad Measurement</Nav.Link>
                      </Nav.Item>
                     
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          <ProjectCard
                            imageClass={"proj-tech1"}
                            heading={"Digital Twin"}
                           // title="Digital Twin & Remote Assistant Demo"
                            type={`This project is a digital twin of the wind farm where we are getting the data from the IOT device and the parameters reflect here. On top of this I have added a remote Assist feature which enables the communication between expert and the field engineer.`}
                            // imgUrl={projImg1}
                            videoUrl={"https://youtu.be/SzXO6pOo1iQ"}
                            techStack={[
                              "https://cdn-icons-png.flaticon.com/512/5969/5969347.png"
                            ]}
                            // gitHref={
                            //   "https://github.com/web-dev-akash/Overstock_FullStack"
                            // }
                            netlifyHref={"https://youtu.be/SzXO6pOo1iQ"}
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard
                            imageClass={"proj-tech2"}
                            heading={"VR Car Showroom Demo"}
                            //title="Swiggy is an Indian online food ordering and delivery platform.Swiggy offers an online ordering platform for a variety of listed neighborhood partner restaurants and their fleet of delivery personnel who pick up orders from the partner restaurants and deliver them to customers' doorsteps."
                            type={`This project is a demo for a Virtual Reality car showroom with multiplayer implementation using Photon services and Meta Avatars SDK for avatar implementation.`}
                            //imgUrl={projImg2}
                            videoUrl={"https://youtu.be/YCNGchoezlE"}
                            techStack={[
                              "https://cdn-icons-png.flaticon.com/512/5969/5969347.png"
                            ]}
                            // gitHref={
                            //   "https://github.com/ramgopalshukla/swiggyclone"
                            // }
                            netlifyHref={
                              "https://youtu.be/YCNGchoezlE"
                            }
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectCard
                            imageClass={"proj-tech3"}
                            heading={"VR Ad Measurement"}
                            //title="Shine.com is the most innovative and second largest online job portal in India. Founded in 2008, over the past decade, Shine.com has become a prominent name in the recruitment industry."
                            type={`This project is for Ad measurement metrics as per the OM standards. Here as per the OM standards of AD measurement, a impression is checked if it's viewable or non viewable impression and a json data is generated in the JSON format.`}
                            //imgUrl={projImg3}
                            videoUrl={"https://youtu.be/uFLJvtTv4ms"}
                            techStack={[
                              "https://cdn-icons-png.flaticon.com/512/5969/5969347.png"
                            ]}
                            // gitHref={
                            //   "https://github.com/web-dev-akash/Team_Shine"
                            // }
                            netlifyHref={"https://youtu.be/uFLJvtTv4ms"}
                          />
                        </Row>
                      </Tab.Pane>
                      
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

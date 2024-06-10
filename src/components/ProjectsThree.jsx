import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ProjectsThree = () => {
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
                  {/* <h2>Projects</h2> */}
                  <br />
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Audio2Gesture</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">A2F with Meta Human</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">A2F with Meta Human Live Link</Nav.Link>
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
                            heading={"Audio2Gesture"}
                            //title="Audio to Face Tutorial via livelink"
                            type={`Solo Project | Duration : 1 Week`}
                            // imgUrl={projImg1}
                            videoUrl={"https://youtu.be/XhDsG4FqAxY"}
                            techStack={[
                              "https://cdn-icons-png.flaticon.com/512/882/882731.png"
                            ]}
                            // gitHref={
                            //   "https://github.com/web-dev-akash/Overstock_FullStack"
                            // }
                            netlifyHref={"https://overstock-mern.netlify.app/"}
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard
                            imageClass={"proj-tech2"}
                            heading={"A2F with Meta Human"}
                            //title="Swiggy is an Indian online food ordering and delivery platform.Swiggy offers an online ordering platform for a variety of listed neighborhood partner restaurants and their fleet of delivery personnel who pick up orders from the partner restaurants and deliver them to customers' doorsteps."
                            type={`This demo shows the implementation of audio 2 face extension with unreal meta human character.`}
                            //imgUrl={projImg2}
                            videoUrl={"https://youtu.be/oSJs3vvI5Uo"}
                            techStack={[
                              "https://cdn-icons-png.flaticon.com/512/882/882731.png","https://cdn2.unrealengine.com/ue-logo-stacked-unreal-engine-w-677x545-fac11de0943f.png"
                            ]}
                            // gitHref={
                            //   "https://github.com/ramgopalshukla/swiggyclone"
                            // }
                            netlifyHref={
                              "https://youtu.be/oSJs3vvI5Uo"
                            }
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectCard
                            imageClass={"proj-tech3"}
                            heading={"A2F with Meta Human Live Link"}
                            //title="Shine.com is the most innovative and second largest online job portal in India. Founded in 2008, over the past decade, Shine.com has become a prominent name in the recruitment industry."
                            type={`This demo is showing the project which is a implementation of Nvidia Omniverse Audio to Face kit Application to Unreal Engine Meta human charector during runtime.`}
                            //imgUrl={projImg3}
                            videoUrl={"https://youtu.be/cRzWtYasrMk"}
                            techStack={[
                              "https://cdn-icons-png.flaticon.com/512/882/882731.png","https://cdn2.unrealengine.com/ue-logo-stacked-unreal-engine-w-677x545-fac11de0943f.png"
                            ]}
                            // gitHref={
                            //   "https://github.com/web-dev-akash/Team_Shine"
                            // }
                            netlifyHref={"https://youtu.be/cRzWtYasrMk"}
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

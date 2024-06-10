import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ProjectsTwo = () => {
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
                        <Nav.Link eventKey="first">Interior Designing</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Pose Estimation</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Audio2Face</Nav.Link>
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
                            heading={"Web based Interior Designing"}
                            //title="Audio to Face Tutorial via livelink"
                            type={`This project showcases the Interior design project which brings the vendor and customer together over web with audio interaction and real-time update of the content between vendor and customer.`}
                            // imgUrl={projImg1}
                            videoUrl={"https://youtu.be/lv3fJFOz2ec"}
                            techStack={[
                              "https://cdn-icons-png.flaticon.com/512/5969/5969347.png"
                            ]}
                            // gitHref={
                            //   "https://github.com/web-dev-akash/Overstock_FullStack"
                            // }
                            netlifyHref={"https://youtu.be/lv3fJFOz2ec"}
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          <ProjectCard
                            imageClass={"proj-tech2"}
                            heading={"Pose Estimation using Posenet"}
                            //title="Swiggy is an Indian online food ordering and delivery platform.Swiggy offers an online ordering platform for a variety of listed neighborhood partner restaurants and their fleet of delivery personnel who pick up orders from the partner restaurants and deliver them to customers' doorsteps."
                            type={`This demo is showcasing the pose estimation concept which is developed using JS library Pose Net , where the person's body parts are assigned with Cartesian coordinates and sent that data in real-time to Unity and there by controlling the player charector. There are wide variety of use cases like yoga, charector controller games etc.`}
                            //imgUrl={projImg2}
                            videoUrl={"https://youtu.be/zFnUQ03W8aM"}
                            techStack={[
                              "https://cdn-icons-png.flaticon.com/512/5969/5969347.png"
                            ]}
                            // gitHref={
                            //   "https://github.com/ramgopalshukla/swiggyclone"
                            // }
                            netlifyHref={
                              "https://youtu.be/zFnUQ03W8aM"
                            }
                          />
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <ProjectCard
                            imageClass={"proj-tech3"}
                            heading={"Audio2Face"}
                            //title="Shine.com is the most innovative and second largest online job portal in India. Founded in 2008, over the past decade, Shine.com has become a prominent name in the recruitment industry."
                            type={`This is a demo tutorial showcasing the Audio 2Face implementation`}
                            //imgUrl={projImg3}
                            videoUrl={"https://youtu.be/oCHB3eFnsY4"}
                            techStack={[
                              "https://cdn-icons-png.flaticon.com/512/882/882731.png"
                            ]}
                            // gitHref={
                            //   "https://github.com/web-dev-akash/Team_Shine"
                            // }
                            netlifyHref={"https://youtu.be/oCHB3eFnsY4"}
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

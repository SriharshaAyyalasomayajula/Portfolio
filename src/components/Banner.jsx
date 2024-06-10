import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["UNITY DEVELOPER", "VR DEVELOPER","AR DEVELOPER","GAME DEVELOPER"];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, 80);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex((prevIndex) => prevIndex - 1);
        setDelta(period);
      
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={7} xl={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi, I'm A.K. Sriharsha`}{" "}
                    <br/>
                    <span
                      className="txt-rotate"
                      // dataperiod="500"
                      data-rotate='[ "UNITY DEVELOPER", "VR DEVELOPER","AR DEVELOPER" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  A Unity developer with 5+ of hands-on experience. My expertise extends to crafting exciting experiences in Unity, with a focus on Virtual Reality (VR), Augmented Reality (AR),Game Development and Nvidia Omniverse. I've also ventured into Unreal Engine.
                  </p>

                  <a
                    className="banner-anchor"
                    href={
                      "https://drive.google.com/file/d/1zuVbeSHIUbkgqmNbgQwgoh7yqk-ufGe2/view?usp=drivesdk"
                    }
                  >
                    Resume
                    <span>
                      {" "}
                      <ArrowRightCircle size={25} />
                    </span>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={5} xl={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

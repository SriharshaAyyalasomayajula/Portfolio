import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Designer-3.png";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4} className="footer-col-image">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </Col>
          <Col size={12} sm={8} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/harsha-ayyalasomayajula-0a8234110"
                target={"_blank"}
              >
                <span>
                  <FaLinkedinIn />
                </span>
              </a>
              <a href="mailto: akharsha2@gmail.com">
                <span>
                  <MdEmail />
                </span>
              </a>
              <a href="https://github.com/SriharshaAyyalasomayajula" target={"_blank"}>
                <span>
                  <FaGithub />
                </span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=7032328650"
                target={"_blank"}
              >
                <span>
                  <FaWhatsapp />
                </span>
              </a>
            </div>
            <p>
              Made with{" "}
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                  alt="love-icon"
                />
              </span>{" "}
              by Ayyalasomayajula Krishna Sriharsha.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

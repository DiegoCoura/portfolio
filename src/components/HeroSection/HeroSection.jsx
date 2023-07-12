/* eslint-disable react/no-unescaped-entities */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "./styles.css";

export default function HeroSection() {
  return (
    <>
      <Container className="container-first-section">
        <Row className="row-first-section">
          <Col className="col-md6 col-1-first-section">
            <Container className="container-col1-section">
              <h3 className="h3-first-section">
                Hello! <br></br>
              </h3>
              <h2 className="h2-first-section">
                <strong>I'm Diego Coura,</strong>
                <br></br>
                Front End developer
              </h2>
            </Container>
            <p className="p-first-section">
              With 1 year of software development experience, I have build{" "}
              <br></br>a solid expertise in React, JavaScript, HTML, CSS, and
              Bootstrap,<br></br>
              gaining practical proficiency through hands-on projects.
            </p>
            <Row className="row-buttons">
              <Col>
                <Button className="btn-first-section-download">
                  Download CV
                </Button>
                <Button className="btn-first-section-contact">Contact</Button>
              </Col>
            </Row>
          </Col>
          <Col className="col-md6 col-banner">
            <Container className="container-2-coluna">
              <Image className="banner-img-azul" src="/src/assets/imgs/vetorFundo.svg" rounded />
              <Image className="banner-img-foto" src="/src/assets/imgs/fotoDida.svg" roundedCircle />
              <Image className="banner-img-branco" src="/src/assets/imgs/vetorSemFundo.svg" rounded />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

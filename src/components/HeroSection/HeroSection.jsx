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
          <Col xl={6} className="col-1-first-section">
            <Container className="container-col1-section">
              <h3 className="h3-first-section">
                Hello! <br></br>
              </h3>
              <h2 className="h2-first-section">
                <strong>I'm Diego Coura,</strong>
                <br></br>
                Front End developer
              </h2>
              <p className="p-first-section">
                With 1 year of software development experience, I have build a
                solid expertise in React, JavaScript, HTML, CSS, and Bootstrap,
                gaining practical proficiency through hands-on projects.
              </p>
              <Row className="row-buttons">
                <Col className="container-buttons-first-section">
                  <Button className="btn-download" href="/static/diegocoura-cv-en.pdf" download>Download CV</Button>
                  <Button className="btn-contact" href="#contactSection">
                    Contact
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xl={6} className="col-banner">
            <Container className="container-2-coluna">
              <Image
                className="banner-img-azul"
                src="/static/images/vetorFundo-1.png"
                rounded
              />
              <Image
                className="banner-img-foto"
                src="/static/images/fotoDida-2.png"
                roundedCircle
              />
              <Image
                className="banner-img-branco"
                src="/static/images/vetorSemFundo-1.png"
                rounded
              />
            </Container>
            
          </Col>
          <Row className="row-buttons-2">
                <Col className="container-buttons-first-section">
                  <Button className="btn-download" href="/static/diegocoura-cv-en.pdf" download>Download CV</Button>
                  <Button className="btn-contact" href="#contactSection">
                    Contact
                  </Button>
                </Col>
              </Row>
        </Row>
      </Container>
    </>
  );
}

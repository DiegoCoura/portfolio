import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./styles.css";

export default function FooterBar() {
  return (
    <>
      <Navbar>
        <Container className="container-footer">
          <Navbar.Brand href="/" className="text-decoration-none">
            D.C. Portfolio
          </Navbar.Brand>
          <Nav className="me-5">
            <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/DiegoCoura"
            >
              <Container>
                <Row>
                  <Col xs={6} md={4} className="logos-cols">
                    <Image
                      className="logos-top"
                      src="/public/static/images/github-icon-100.svg"
                      roundedCircle
                    />
                  </Col>
                </Row>
              </Container>
            </Nav.Link>
            <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/diego-coura-18b88317b/"
            >
              <Container>
                <Row>
                  <Col xs={6} md={4} className="logos-cols">
                    <Image
                      className="logos-top"
                      src="/public/static/images/linkedin-icon-100.svg"
                      roundedCircle
                    />
                  </Col>
                </Row>
              </Container>
            </Nav.Link>
            <Nav.Link href="#contactSection">
              <Container>
                <Row>
                  <Col xs={6} md={4} className="logos-cols">
                    <Image
                      className="logos-top"
                      src="/public/static/images/arroba-100.svg"
                      roundedCircle
                    />
                  </Col>
                </Row>
              </Container>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

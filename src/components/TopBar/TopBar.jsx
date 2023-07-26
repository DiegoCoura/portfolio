import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./styles.css";

export default function TopBar() {
  return (
    <>
      <Navbar className="nav-top">
        <Container className="container-nav-top">
          <Navbar.Brand href="/" className="text-decoration-none">
            D.C. Portfolio
          </Navbar.Brand>
          <Nav className="nav-logos-top">
            <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/DiegoCoura"
            >
              <Container className="container-logos-top">
                <Row>
                  <Col xs={6} md={4} className="logos-cols-top">
                    <Image
                      className="logos-top"
                      src="/static/images/github-icon-100.svg"
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
              <Container className="container-logos-top">
                <Row>
                  <Col xs={6} md={4} className="logos-cols-top">
                    <Image
                      className="logos-top"
                      src="/static/images/linkedin-icon-100.svg"
                      roundedCircle
                    />
                  </Col>
                </Row>
              </Container>
            </Nav.Link>
            <Nav.Link href="#contactSection">
              <Container className="container-logos-top">
                <Row>
                  <Col xs={6} md={4} className="logos-cols-top">
                    <Image
                      className="logos-top"
                      src="/static/images/arroba-100.svg"
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

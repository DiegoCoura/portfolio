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
      <Navbar className="nav-footer">
        <Container className="container-nav-footer">
          <Navbar.Brand href="/" className="text-decoration-none brand-footer">
            D.C. Portfolio
          </Navbar.Brand>
          <Nav className="nav-logos-footer">
            <Nav.Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/DiegoCoura"
            >
              <Container className="container-logos-footer">
                <Row>
                  <Col xs={6} md={4} className="logos-cols-footer">
                    <Image
                      className="logos-footer"
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
              <Container className="container-logos-footer">
                <Row>
                  <Col xs={6} md={4} className="logos-cols-footer">
                    <Image
                      className="logos-footer"
                      src="/static/images/linkedin-icon-100.svg"
                      roundedCircle
                    />
                  </Col>
                </Row>
              </Container>
            </Nav.Link>
            <Nav.Link href="#contactSection">
              <Container className="container-logos-footer">
                <Row>
                  <Col xs={6} md={4} className="logos-cols-footer">
                    <Image
                      className="logos-footer"
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

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
      
        <Navbar>
          <Container className="container-nav">
            <Navbar.Brand href="/" className="text-decoration-none">
              D.C. Portfolio
            </Navbar.Brand>
            <Nav className="nav-logos">
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
                        src="\src\assets\imgs\github-icon-100.svg"
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
                        src="\src\assets\imgs\linkedin-icon-100.svg"
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
                        src="\src\assets\imgs\arroba-100.svg"
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

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Icons from "../icons/Icons";
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
                    <Icons.GithubIcon />
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
                    <Icons.LinkedinIcon />
                  </Col>
                </Row>
              </Container>
            </Nav.Link>
            <Nav.Link href="#contactSection">
              <Container className="container-logos-footer">
                <Row>
                  <Col xs={6} md={4} className="logos-cols-footer">
                    <Icons.ArrobaIcon />
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

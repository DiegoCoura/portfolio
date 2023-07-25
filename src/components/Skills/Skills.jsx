import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/esm/Image";
import "./styles.css";

export default function Skills() {
  return (
    <Container className="skills-container">
      <Row>
        <Col>
          <h3 className="skills-h3">
            Skills
          </h3>
        </Col>
      </Row>
      <Row md={5} xs={3} className="justify-content-center gap-3">        
        <Col className="skills-cols"><Image className="skills-img" src="/static/images/html-100.svg" rounded /></Col>
        <Col className="skills-cols"><Image className="skills-img" src="/static/images/css-100.svg" rounded /></Col>
        <Col className="skills-cols"><Image className="skills-img" src="/static/images/js-100.svg" rounded /></Col>
        <Col className="skills-cols"><Image className="skills-img" src="/static/images/react-100.svg" rounded /></Col>
        <Col className="skills-cols"><Image className="skills-img" src="/static/images/bootstrap-100.svg" rounded /></Col>
      </Row>
    </Container>
  );
}

/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/Container";
import "./styles.css";

export default function CardProject({
  title,
  banner,
  description,
  technologies,
}) {
  return (
    <>
      <Container fluid className="container-single-card">
        <Row>
          <Col className="col-cardProject">
            <Card className="card-project">
              <Container className="container-card-banner">
                <Card.Img className="card-banner" variant="top" src={banner} />
              </Container>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <h4>Technologies</h4>
                <Row className="row-technologies">
                  {technologies.map((tec, index) => {
                    return (
                      <Col key={index} className="tec-cols">
                        <Image
                          key={index}
                          className="card-icons"
                          src={tec}
                          rounded
                        />
                      </Col>
                    );
                  })}
                </Row>
                <Row className="row-card-buttons">
                  <Col className="col-card-buttons">
                    <Button className="card-buttons">Live Preview</Button>
                  </Col>
                  <Col className="col-card-buttons">
                    <Button className="card-buttons">Check on Github</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

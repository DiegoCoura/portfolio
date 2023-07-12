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
  tecnologies,
}) {
  return (
    <>
      <Container fluid className="container-single-card">
        <Row>
          <Col className="col-cardProject">
            <Card className="card-project">
              <Card.Img className="card-banner" variant="top" src={banner} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <h4>Tecnologies</h4>
                <Row className="row-tecnologies">
                  {tecnologies.map((tec, index) => {
                    return (
                      <Col key={index} className="tec-cols" md="2">
                        <Image key={index} className="card-icons" src={tec} rounded />
                      </Col>
                    );
                  })}
                </Row>
                <Row className="row-card-buttons">
                  <Col className="col-card-buttons" md="auto">
                    <Button className="card-buttons">Live Preview</Button>
                  </Col>
                  <Col className="col-card-buttons" md="auto">
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

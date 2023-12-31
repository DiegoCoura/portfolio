import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CardProject from "/src/components/CardProject/CardProject.jsx";
import Projetos from "/src/assets/projects/projectsData.js";
import "./styles.css";

export default function CardsSection() {
  return (
    <>
      <Container className="container-projects-title">
        <Row>
          <h3 className="projects-h3">Projects</h3>
        </Row>
      </Container>
      <Container className="container-cards">
        <Row className="row-projects row-cols-1 row-cols-lg-2 row-gap-4">
          {Projetos.map((project) => {
            return (
              <Col className="col-cards" key={project.id}>
                <CardProject
                  banner={project.banner}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  live={project.live}
                  code={project.code}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

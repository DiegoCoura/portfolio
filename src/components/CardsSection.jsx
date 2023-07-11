import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CardProject from "/src/components/CardProject.jsx";
import Projetos from "/src/assets/projects/projectsData.js";

export default function CardsSection() {
  return (
    <>
      <Container className="container-projects-title">
        <Row>
          <h3 className="skills-h3">Projects</h3>
        </Row>
      </Container>
      <Container className="container-cards">
        <Row>
          {Projetos.map((project) => {
            return (
              <Col className="col-cards" key={project.id}>
                <CardProject
                  banner={project.banner}
                  title={project.title}
                  description={project.description}
                  tecnologies={project.tecnologies}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

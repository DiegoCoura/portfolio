/* eslint-disable react/no-unescaped-entities */
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./styles.css";

export default function ContactSection() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Container id="contactSection" className="container-contact-section">
        <Row>
          <Col>
            <h3>
              <strong>&lt;</strong>Let's Talk<b>&#8260;</b>
              <strong>&gt;</strong>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col className="col-form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  required
                  type="name"
                  className="form-name"
                  placeholder="Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please type your name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  required
                  className="form-email"
                  type="email"
                  placeholder="Email"
                />
                <Form.Control.Feedback type="invalid">
                  Please insert your email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  required
                  className="form-message"
                  as="textarea"
                  rows={3}
                  placeholder="Message"
                />
                <Form.Control.Feedback type="invalid">
                  Please type a message.
                </Form.Control.Feedback>
              </Form.Group>
              <Button type="submit">
                Send{" "}
                <svg className="arrowIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="19"
                  viewBox="0 0 27 19"
                  fill="none"
                >
                  <path
                    d="M1.68066 8.25C0.990308 8.25 0.430664 8.80964 0.430664 9.5C0.430664 10.1904 0.990308 10.75 1.68066 10.75V8.25ZM26.0645 10.3839C26.5527 9.89573 26.5527 9.10427 26.0645 8.61612L18.1096 0.661165C17.6214 0.17301 16.83 0.17301 16.3418 0.661165C15.8537 1.14932 15.8537 1.94078 16.3418 2.42893L23.4129 9.5L16.3418 16.5711C15.8537 17.0592 15.8537 17.8507 16.3418 18.3388C16.83 18.827 17.6214 18.827 18.1096 18.3388L26.0645 10.3839ZM1.68066 10.75H25.1807V8.25H1.68066V10.75Z"
                    fill="#F1F1F1"
                  />
                </svg>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

/* eslint-disable react/no-unescaped-entities */
import Container from "react-bootstrap/Container";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./styles.css";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_szx465r",
        "template_g2pt00i",
        templateParams,
        "W_TnL5zcZhDI2jtw7"
      )
      .then(
        (response) => {
          console.log("Email Enviado", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("ERRO: ", err);
        }
      );
  };

  return (
    <>
      <Container
        id="contactSection"
        className="container-contact-section text-center text-sm-end"
      >
        <Row>
          <h3>
            <strong>&lt;</strong>Let's Talk<b>&#8260;</b>
            <strong>&gt;</strong>
          </h3>
        </Row>
        <Row className="row-form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nameInput">
              <Form.Control
                required
                type="text"
                className="form-name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailInput">
              <Form.Control
                required
                className="form-email"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="messageInput">
              <Form.Control
                required
                type="text"
                name="message"
                className="form-message"
                as="textarea"
                rows={3}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </Form.Group>
            <Button className="send-btn" type="submit">
            Send{" "}
              <link rel="stylesheet" href="styles.css" />
              <svg
              width="15%"
              height="95%"               
                viewBox="0 -7 12 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidyMid meet"
              >
                <path
                  id="arrow"
                  d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464466C6.97631 0.269204 6.65973 0.269204 6.46447 0.464466C6.2692 0.659728 6.2692 0.976311 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM1 4.5L10 4.5V3.5L1 3.5L1 4.5Z"
                  fill="#F1F1F1"
                />
              </svg>
              
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}

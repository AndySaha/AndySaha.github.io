import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const AboutSection = () => {
  return (
    <Container>
      <Row className="my-5 align-items-center">
        <Col md={6}>
          <img
            src="src\images\karin1.jpg"
            alt="Karin the Baker"
            className="img-fluid rounded-circle"
          />
        </Col>
        <Col md={6}>
          <Card className="custom-card p-3">
            <Card.Body>
              <Card.Title>
                <h2>About Karin</h2>
              </Card.Title>
              <Card.Text>
                Amidst the turbulence of the Covid-19 pandemic, Karin discovered
                a passion that brought not just comfort, but an outlet for
                creativity and joy - baking. Chronically ill, and often needing
                to lay down for up to 18 hours a day, baking emerged as a
                solace; an activity that she could engage with and enjoy,
                shaping it around her needs.
              </Card.Text>
              <Card.Text>
                Each of Karin's bakes is a testament to her resilience and
                dedication. It is a celebration of her ability to create
                delightful delicacies despite the constraints of her illness.
                Karin pours her heart into every bake, making sure each one is a
                piece of joy for anyone who tastes it.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;

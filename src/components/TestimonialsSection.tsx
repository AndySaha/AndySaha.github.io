import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const TestimonialsSection = () => {
  return (
    <Container className="card-container">
      <h1 className="text-center my-5">Testimonials</h1>
      <Row className="my-5">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="src\images\blueredcup.png" />
          </Card>
          <Card className="custom-card">
            <Card.Text className="p-4">
              "Karin’s Koncoction’s are truly out of this world! Prepare to have
              your mind and tastebuds blown!! Karin’s creations are not only
              stunning to the eye, but extremely well put together and thought
              out. Bold contrasting flavors and textures, just the right amount
              of sweetness, gorgeous aesthetic details with vibrant
              unconventional colors schemes …. Her desserts also have the deep
              rich, creamy moistness that vegan desserts don’t have. Karin’s
              packaging is the coolest ever! Karin herself is a truly authentic
              generous, genuine soul…. …one of a kind all around!. 20 stars!!" -
              Anne
            </Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="custom-card">
            <Card.Text className="p-4">
              "I have been able to taste a few different delights from Karin's
              Koncoctions .. and each one of them was an explosion of flavour
              that made you just want to keep tasting. From her cupcakes to her
              bonbons, Petit Fours, and cakes ...Always fresh and moist and
              bursting with flavour .. every morsel tastier than the next. They
              are always so beautiful to look at .. hard to slice through them
              ..but worth every bite .. Inside and out .. YUMMY TO THE LAST
              MORSEL...and even better, they are all also available in vegan,
              which are the ones I go for!" - Corrina
            </Card.Text>
          </Card>
          <Card className="mb-4">
            <Card.Img variant="top" src="src\images\blueredcup.png" />
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="src\images\pastelcup.png" />
          </Card>
          <Card className="custom-card">
            <Card.Text className="p-4">
              “As stunningly beautiful to look at, as they are delicious to eat,
              Karin’s desserts were an integral part of what made our wedding
              reception so special! With an assortment of over 150 handmade
              desserts, even including a mini-wedding cake! the time, effort and
              attention to detail were evident. Honestly, we were just blown
              away. There was even a vegan option for everything that was made.
              I would highly recommend her to anyone who wants to make their
              event delicious, special and memorable!” - Tim
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialsSection;

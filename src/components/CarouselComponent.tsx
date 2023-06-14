import React from "react";
import { Carousel, Container } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Container>
      <Carousel style={{ width: "100%" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src\images\blueredcup.png" // replace with the path to your image
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-text">Luxury Baked Goods</h3>
            <p className="carousel-text">
              Order from the products page to place an order for goods available
              now!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src\images\blueredcup.png" // replace with the path to your image
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-text">Catering</h3>
            <p className="carousel-text">
              Need to make your event special? Contact Karin through the
              catering page to make it happen!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src\images\pastelcup.png" // replace with the path to your image
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="carousel-text">Custom Baked Goods</h3>
            <p className="carousel-text">
              Have a specific request? Contact Karin through the custom page to
              create your dream desert!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CarouselComponent;

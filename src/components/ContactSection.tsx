import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactSection = () => {
  return (
    <Card className="text-center">
      <Card.Body className="contact-page">
        <Card.Title>Contact</Card.Title>
        <Card.Text className="contact-icons">
          <a href="mailto:karin.alince23@gmail.com" className="contact-icon">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </a>
          <a
            href="https://instagram.com/karin.alince23"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ContactSection;

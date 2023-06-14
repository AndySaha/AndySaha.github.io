import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import logo from "/src/images/logo_pink.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faTags,
  faInfoCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <div className="navbar-content">
        <Nav>
          <Nav.Link href="#orderonline">
            <div className="nav-link-content">
              <FontAwesomeIcon icon={faShoppingCart} size="3x" />
              <div>Order Online</div>
            </div>
          </Nav.Link>
          <Nav.Link href="#products" className="nav-link">
            <div className="nav-link-content">
              <FontAwesomeIcon icon={faTags} size="3x" />
              <div>Products</div>
            </div>
          </Nav.Link>
        </Nav>
        <Navbar.Brand href="#home" className="nav-link">
          <img
            src={logo}
            width="200"
            height="120"
            className="d-inline-block align-top"
            alt="Karin's Store logo"
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#about" className="nav-link">
            <div className="nav-link-content">
              <FontAwesomeIcon icon={faInfoCircle} size="3x" />
              <div>About Karin</div>
            </div>
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-link">
            <div className="nav-link-content">
              <FontAwesomeIcon icon={faEnvelope} size="3x" />
              <div>Contact</div>
            </div>
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavBarComponent;

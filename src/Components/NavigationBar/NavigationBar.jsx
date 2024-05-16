import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./NavigationBar.scss";
import AirplaneLogo from "../../Assets/plane-svgrepo-com.svg";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navigation-bar sticky-top">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="brand-link">
            <img src={AirplaneLogo} alt="logo" className="brand-logo" />
            React Travel
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-center">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/holidays" className="nav-link">
              Holidays
            </Nav.Link>
            <Nav.Link as={Link} to="/city-breaks" className="nav-link">
              City Breaks
            </Nav.Link>
            <Nav.Link as={Link} to="/destinations" className="nav-link">
              Destinations
            </Nav.Link>
          </Nav>
          <Button variant="light" className="sign-in-button">
            <Link to="/" className="sign-in-link text-nowrap">
              Sign In
            </Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

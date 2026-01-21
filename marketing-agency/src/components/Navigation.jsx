import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    // Sticky Top Navigation Bar
    <Navbar bg="white" expand="lg" className="shadow-sm sticky-top">
      <Container>
        
        {/* =========================================
            BRAND LOGO
            Links back to home page.
            ========================================= */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          <i className="bi bi-graph-up-arrow me-2"></i>TrustMart
        </Navbar.Brand>

        {/* Mobile Toggle Button (Hamburger Menu) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* =========================================
              NAV LINKS
              Centered navigation items using React Router NavLink for active state.
              ========================================= */}
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>

          {/* =========================================
              CTA BUTTON
              Prominent 'Get Started' button in the navbar.
              ========================================= */}
          <div className="ms-lg-3">
             <Button as={Link} to="/contact" variant="primary" className="rounded-pill px-4">
                Get Started
             </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

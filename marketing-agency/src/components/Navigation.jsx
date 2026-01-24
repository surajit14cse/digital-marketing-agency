import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    // Sticky Top Navigation Bar with Glassmorphism
    <Navbar 
      expand="lg" 
      fixed="top"
      className={`glass-nav ${scrolled ? 'scrolled' : ''} py-3 transition-all`}
    >
      <Container>
        
        {/* =========================================
            BRAND LOGO
            Links back to home page.
            ========================================= */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary d-flex align-items-center">
          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style={{width: '40px', height: '40px'}}>
             <i className="bi bi-graph-up-arrow"></i>
          </div>
          <span className="fs-4">TrustMart</span>
        </Navbar.Brand>

        {/* Mobile Toggle Button (Hamburger Menu) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />

        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* =========================================
              NAV LINKS
              Centered navigation items using React Router NavLink for active state.
              ========================================= */}
          <Nav className="mx-auto gap-4">
            <Nav.Link as={NavLink} to="/" end className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className="nav-link-custom">Portfolio</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>

          {/* =========================================
              CTA BUTTON
              Prominent 'Get Started' button in the navbar.
              ========================================= */}
          <div className="ms-lg-3 d-flex align-items-center gap-3">
             <Button as={Link} to="/contact" variant="primary" className="rounded-pill px-4 shadow-sm hover-up border-0 bg-gradient-primary">
                Get Started
             </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
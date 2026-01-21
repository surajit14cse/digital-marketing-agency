import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // Main Footer Container - Dark theme with auto top margin to stick to bottom
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto">
      <Container>
        <Row className="gy-4">
          
          {/* =========================================
              BRANDING & SOCIALS COLUMN
              Logo, tagline, and social media links.
              ========================================= */}
          <Col lg={4} md={12} className="mb-4 mb-lg-0">
            <h5 className="mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-graph-up-arrow text-primary"></i>
                <span className="fw-bold">TrustMart</span>
            </h5>
            <p className="text-white-50 small mb-4 pe-lg-5">
              Empowering businesses to scale through data-driven digital marketing strategies. We turn clicks into loyal customers and complex data into clear growth.
            </p>
            <div className="d-flex gap-3">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, idx) => (
                    <a key={idx} href="#" className="text-white-50 text-decoration-none hover-white transition-all">
                        <i className={`bi bi-${social} fs-5`}></i>
                    </a>
                ))}
            </div>
          </Col>
          
          {/* =========================================
              COMPANY LINKS COLUMN
              Navigation links for company pages.
              ========================================= */}
          <Col lg={2} md={4} sm={6}>
            <h6 className="text-uppercase mb-3 fw-bold small text-primary ls-1">Company</h6>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-2"><Link to="/about" className="text-decoration-none text-white-50 hover-white">About Us</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-decoration-none text-white-50 hover-white">Careers</Link></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-white-50 hover-white">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-white-50 hover-white">Terms of Service</a></li>
            </ul>
          </Col>

          {/* =========================================
              SERVICES LINKS COLUMN
              Quick access to main service offerings.
              ========================================= */}
          <Col lg={2} md={4} sm={6}>
            <h6 className="text-uppercase mb-3 fw-bold small text-primary ls-1">Services</h6>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-2"><Link to="/services" className="text-decoration-none text-white-50 hover-white">SEO Optimization</Link></li>
              <li className="mb-2"><Link to="/services" className="text-decoration-none text-white-50 hover-white">PPC Advertising</Link></li>
              <li className="mb-2"><Link to="/services" className="text-decoration-none text-white-50 hover-white">Social Media</Link></li>
              <li className="mb-2"><Link to="/services" className="text-decoration-none text-white-50 hover-white">Content Marketing</Link></li>
            </ul>
          </Col>

          {/* =========================================
              NEWSLETTER & CONTACT COLUMN
              Subscription form and contact details.
              ========================================= */}
          <Col lg={4} md={4}>
             <h6 className="text-uppercase mb-3 fw-bold small text-primary ls-1">Newsletter</h6>
             <p className="text-white-50 small mb-3">Subscribe to get the latest digital trends and agency news.</p>
             <Form onSubmit={(e) => e.preventDefault()}>
                <InputGroup className="mb-3">
                    <Form.Control 
                        placeholder="Your email address" 
                        aria-label="Your email address"
                        className="bg-transparent border-secondary text-white placeholder-gray focus-none"
                    />
                    <Button variant="primary" type="submit">
                        Subscribe
                    </Button>
                </InputGroup>
             </Form>
             <div className="mt-4">
                 <p className="text-white-50 small mb-1"><i className="bi bi-geo-alt me-2 text-primary"></i> 123 Digital Ave, Tech City</p>
                 <p className="text-white-50 small mb-1"><i className="bi bi-envelope me-2 text-primary"></i> hello@trustmart.com</p>
                 <p className="text-white-50 small"><i className="bi bi-telephone me-2 text-primary"></i> +1 (555) 123-4567</p>
             </div>
          </Col>
        </Row>
        
        {/* Divider Line */}
        <hr className="border-secondary opacity-25 my-4" />
        
        {/* =========================================
            COPYRIGHT & CREDITS SECTION
            Bottom row with copyright info and credits.
            ========================================= */}
        <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
                 <p className="text-white-50 small mb-0">
                    &copy; {new Date().getFullYear()} TrustMart Digital Agency. All rights reserved.
                </p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
                 <p className="text-white-50 small mb-0">Designed with <i className="bi bi-heart-fill text-danger mx-1"></i> by TrustMart Team</p>
            </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

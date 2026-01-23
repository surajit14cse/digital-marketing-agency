import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { servicesData, pricingData } from '../data/services';

const Services = () => {
  const { hash } = useLocation();

  // Smooth scroll logic
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="services-page">
      
      {/* =========================================
          HERO SECTION
          Colorful gradient background with floating elements.
          ========================================= */}
      <section className="position-relative overflow-hidden text-white py-6" style={{ background: 'linear-gradient(135deg, #020024 0%, #090979 35%, #00d4ff 100%)' }}>
          {/* Dark Overlay for better text contrast */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>

          {/* Decorative Circles */}
          <div className="position-absolute top-0 start-0 translate-middle rounded-circle bg-white opacity-10" style={{width: '400px', height: '400px', filter: 'blur(80px)'}}></div>
          <div className="position-absolute bottom-0 end-0 translate-middle rounded-circle bg-primary opacity-20" style={{width: '300px', height: '300px', filter: 'blur(60px)'}}></div>

          <Container className="position-relative z-1 text-center">
              <Badge bg="warning" text="dark" className="mb-3 px-3 py-2 rounded-pill shadow-sm" data-aos="fade-down">What We Do</Badge>
              <h1 className="display-3 fw-bold mb-4 text-white" data-aos="fade-up" data-aos-delay="100">Digital Mastery, <span className="text-warning">Delivered.</span></h1>
              <p className="lead text-white-50 mx-auto mb-5" style={{maxWidth: '700px'}} data-aos="fade-up" data-aos-delay="200">
                  From pixel-perfect designs to data-driven marketing campaigns, we provide the full spectrum of services you need to grow in the digital age.
              </p>
              <div data-aos="fade-up" data-aos-delay="300">
                  <Button as={Link} to="/contact" variant="light" size="lg" className="rounded-pill px-5 text-primary fw-bold shadow-lg hover-up">
                      Start Your Project
                  </Button>
              </div>
          </Container>
      </section>

      {/* =========================================
          DETAILED SERVICE SECTIONS
          Alternating layout with rich gradients and icons.
          ========================================= */}
      <div className="bg-light-alt">
          {servicesData.map((service, index) => (
              <section key={service.id} id={service.id} className="py-6 overflow-hidden">
                  <Container>
                      <Row className={`align-items-center g-5 ${index % 2 !== 0 ? 'flex-lg-row-reverse' : ''}`}>
                          
                          {/* Text Content */}
                          <Col lg={6} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                              <div className={`d-inline-flex align-items-center justify-content-center mb-4 rounded-3 text-white shadow-sm`} 
                                   style={{ width: '60px', height: '60px', background: service.gradient }}>
                                  <i className={`bi ${service.icon} fs-3`}></i>
                              </div>
                              <h2 className="fw-bold display-5 mb-2">{service.title}</h2>
                              <p className={`h5 fw-medium mb-4 text-${service.color}`}>{service.subtitle}</p>
                              <p className="text-muted lead mb-4">{service.desc}</p>
                              
                              <ul className="list-unstyled mb-4">
                                  {service.details.map((detail, i) => (
                                      <li key={i} className="mb-3 d-flex align-items-start">
                                          <i className={`bi bi-check-circle-fill text-${service.color} me-3 mt-1`}></i>
                                          <span className="text-muted">{detail}</span>
                                      </li>
                                  ))}
                              </ul>
                              
                              <Button as={Link} to="/contact" variant={`outline-${service.color}`} className="rounded-pill px-4">
                                  Learn More
                              </Button>
                          </Col>

                          {/* Visual/Card Content */}
                          <Col lg={6} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                              <div className="position-relative">
                                  {/* Background Blob */}
                                  <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 rounded-circle opacity-10" 
                                       style={{ background: service.gradient, filter: 'blur(60px)', transform: 'scale(0.8)' }}></div>
                                  
                                  {/* Glass Card */}
                                  <Card className="border-0 shadow-lg bg-white bg-opacity-75 backdrop-blur rounded-4 p-4 position-relative z-1">
                                      <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
                                          <span className="fw-bold text-muted small text-uppercase ls-1">Project Impact</span>
                                          <Badge bg={service.color} pill>Top Rated</Badge>
                                      </div>
                                      <Row className="text-center g-3">
                                          <Col xs={4}>
                                              <h3 className={`fw-bold text-${service.color} mb-0`}>+150%</h3>
                                              <small className="text-muted">Traffic</small>
                                          </Col>
                                          <Col xs={4} className="border-start border-end">
                                               <h3 className={`fw-bold text-${service.color} mb-0`}>3x</h3>
                                              <small className="text-muted">Leads</small>
                                          </Col>
                                          <Col xs={4}>
                                               <h3 className={`fw-bold text-${service.color} mb-0`}>-40%</h3>
                                              <small className="text-muted">Cost</small>
                                          </Col>
                                      </Row>
                                      <div className="mt-4 pt-3 border-top">
                                          <p className="small text-muted mb-0 fst-italic">
                                              "TrustMart's {service.title} strategy completely transformed our business metrics within 90 days."
                                          </p>
                                      </div>
                                  </Card>
                              </div>
                          </Col>
                      </Row>
                  </Container>
              </section>
          ))}
      </div>

      {/* =========================================
          PRICING SECTION
          Clean pricing tables with 'Recommended' highlight.
          ========================================= */}
      <section className="py-6 bg-white">
          <Container>
              <div className="text-center mb-5 mw-800 mx-auto" data-aos="fade-up">
                  <h6 className="text-primary fw-bold text-uppercase">Pricing</h6>
                  <h2 className="display-5 fw-bold mb-3">Transparent Investment</h2>
                  <p className="text-muted lead">Choose the package that fits your growth stage. No hidden fees.</p>
              </div>

              <Row className="justify-content-center align-items-center g-4">
                  {pricingData.map((plan, idx) => (
                      <Col md={6} lg={4} key={idx} data-aos="flip-left" data-aos-delay={idx * 100}>
                          <Card className={`h-100 border-0 rounded-4 text-center overflow-hidden transition-hover ${plan.highlight ? 'shadow-lg scale-hover transform-hover' : 'shadow-sm'}`} 
                                style={plan.highlight ? { transform: 'scale(1.05)', zIndex: 2 } : {}}>
                              
                              {plan.highlight && <div className="bg-primary text-white py-1 small fw-bold text-uppercase ls-1">Most Popular</div>}
                              
                              <Card.Body className="p-5 d-flex flex-column">
                                  <h5 className="fw-bold text-muted text-uppercase mb-3">{plan.tier}</h5>
                                  <div className="mb-3">
                                      <span className="display-4 fw-bold text-dark">{plan.price}</span>
                                      <span className="text-muted">{plan.period}</span>
                                  </div>
                                  <p className="text-muted small mb-4">{plan.desc}</p>
                                  
                                  <div className="flex-grow-1 mb-4">
                                      <ul className="list-unstyled">
                                          {plan.features.map((feature, i) => (
                                              <li key={i} className="mb-3 d-flex align-items-center justify-content-center small text-muted">
                                                  <i className="bi bi-check2 text-primary me-2 fs-5"></i>
                                                  {feature}
                                              </li>
                                          ))}
                                      </ul>
                                  </div>

                                  <Button 
                                    as={Link} 
                                    to="/contact" 
                                    variant={plan.highlight ? "primary" : "outline-dark"} 
                                    className="rounded-pill w-100 py-2 fw-bold"
                                  >
                                      Get Started
                                  </Button>
                              </Card.Body>
                          </Card>
                      </Col>
                  ))}
              </Row>
          </Container>
      </section>

      {/* =========================================
          FINAL CTA
          Colorful gradient strip.
          ========================================= */}
      <section className="py-6 text-white text-center" style={{ background: 'linear-gradient(45deg, #11998e 0%, #38ef7d 100%)' }}>
          <Container data-aos="zoom-in">
              <h2 className="fw-bold display-5 mb-4">Ready to Scale?</h2>
              <p className="lead mb-5 opacity-90">Let's build something amazing together.</p>
              <Button as={Link} to="/contact" variant="light" size="lg" className="rounded-pill px-5 text-success fw-bold shadow">
                  Book Your Free Consultation
              </Button>
          </Container>
      </section>

    </div>
  );
};

export default Services;
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Services = () => {
  // Use location hook to access URL hash (e.g., #seo)
  const { hash } = useLocation();
  // State for Modal visibility
  const [showModal, setShowModal] = useState(false);
  // State for storing the service currently being viewed in the modal
  const [activeService, setActiveService] = useState(null);

  /* =========================================
     SMOOTH SCROLLING EFFECT
     Handles scrolling to specific service sections when URL hash changes.
     Uses a timeout to ensure DOM is ready before scrolling.
     ========================================= */
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

  // Handler to open modal with specific service data
  const handleShow = (service) => {
      setActiveService(service);
      setShowModal(true);
  };

  // Handler to close modal
  const handleClose = () => setShowModal(false);

  /* =========================================
     SERVICE DATA
     Array containing all service offerings with titles, descriptions,
     icons, and detailed info for the modal.
     ========================================= */
  const services = [
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      desc: "Improve your organic visibility and drive high-quality traffic with our data-driven SEO strategies.",
      details: "Our SEO services are designed to increase your visibility in search results and deliver high-quality, targeted traffic to your website. We use a combination of technical optimization, content strategy, and authority building to ensure long-term success. From auditing your site for technical issues to researching high-value keywords and creating compelling content, we handle every aspect of your SEO strategy.",
      features: ["Keyword Research & Strategy", "On-Page & Technical SEO", "Link Building & Outreach", "Local SEO Optimization"],
      icon: "bi-search"
    },
    {
      id: "ppc",
      title: "Pay-Per-Click (PPC)",
      desc: "Instant visibility and targeted reach. We manage your ad spend to maximize ROI.",
      details: "PPC advertising offers immediate visibility and precise targeting. We manage campaigns across Google Ads, Bing, and social media platforms to ensure you reach your ideal customers at the right time. Our team continuously monitors and optimizes your campaigns to lower your cost-per-acquisition (CPA) and increase your return on ad spend (ROAS).",
      features: ["Google Ads Management", "Social Media Advertising", "Retargeting Campaigns", "Ad Copywriting & A/B Testing"],
      icon: "bi-mouse"
    },
    {
      id: "social",
      title: "Social Media Marketing",
      desc: "Build a community around your brand. We create engaging content that resonates with your audience.",
      details: "Social media is more than just posting; it's about building a community and engaging with your audience. We develop comprehensive social media strategies that align with your brand voice and business goals. From content creation and scheduling to community management and influencer partnerships, we help you build a loyal following.",
      features: ["Strategy Development", "Content Creation & Curation", "Community Management", "Influencer Marketing"],
      icon: "bi-people"
    },
    {
      id: "content",
      title: "Content Marketing",
      desc: "Establish authority and trust with valuable content that educates and converts.",
      details: "Content is the backbone of any successful digital marketing strategy. We create high-quality, relevant content that attracts, engages, and converts your target audience. Whether it's blog posts, whitepapers, case studies, or videos, our content is designed to establish your brand as an industry authority and drive measurable results.",
      features: ["Blog Writing & Management", "Whitepapers & E-books", "Video Scripting & Production", "Email Newsletters"],
      icon: "bi-file-text"
    },
     {
      id: "web",
      title: "Web Design & Development",
      desc: "Fast, responsive, and user-friendly websites designed to convert visitors into customers.",
      details: "Your website is your digital storefront. We design and develop custom websites that are not only visually stunning but also fast, secure, and optimized for conversions. We focus on user experience (UX) to ensure your visitors have a seamless journey from landing page to checkout.",
      features: ["Custom UI/UX Design", "Responsive & Mobile-First", "E-commerce Solutions", "Website Maintenance"],
      icon: "bi-laptop"
    },
    {
      id: "email",
      title: "Email Marketing",
      desc: "Nurture leads and retain customers with personalized email campaigns.",
      details: "Email marketing remains one of the most effective channels for ROI. We help you build and segment your email list, create personalized campaigns, and automate your communication flows. From welcome series to abandoned cart recovery, we ensure your message reaches the right inbox at the right time.",
      features: ["Automated Email Flows", "Newsletter Management", "A/B Testing & Optimization", "List Segmentation"],
      icon: "bi-envelope-paper"
    }
  ];

  return (
    <div className="py-5">
      <Container>
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">Our Services</h1>
          <p className="lead text-muted max-w-2xl mx-auto">
            We offer a full suite of digital marketing services tailored to your business goals.
          </p>
        </div>

        {/* Services Grid */}
        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={4} md={6} key={index} id={service.id} className="scroll-mt">
              <Card className="h-100 border-0 shadow-sm hover-shadow transition-all">
                <Card.Body className="p-4 d-flex flex-column">
                  {/* Service Icon */}
                  <div className="mb-4">
                    <i className={`bi ${service.icon} display-5 text-primary`}></i>
                  </div>
                  {/* Service Title & Desc */}
                  <Card.Title className="h4 mb-3 fw-bold">{service.title}</Card.Title>
                  <Card.Text className="text-muted mb-4 flex-grow-1">
                    {service.desc}
                  </Card.Text>
                  {/* Feature List */}
                  <ul className="list-unstyled mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="mb-2 d-flex align-items-center text-muted">
                        <i className="bi bi-check-circle-fill text-success me-2 small"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* Action Buttons */}
                  <div className="mt-auto d-flex gap-2">
                     <Button variant="outline-primary" className="flex-grow-1 rounded-pill" onClick={() => handleShow(service)}>
                        Learn More
                     </Button>
                     <Button as={Link} to="/contact" variant="primary" className="flex-grow-1 rounded-pill">
                        Get Started
                     </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Bottom CTA */}
        <div className="mt-5 text-center bg-light p-5 rounded-4">
            <h3 className="fw-bold mb-3">Not sure what you need?</h3>
            <p className="text-muted mb-4">Book a free strategy call and let us help you identify the best growth opportunities.</p>
            <Button as={Link} to="/contact" variant="primary" size="lg" className="rounded-pill px-5">Book Consultation</Button>
        </div>

        {/* =========================================
            SERVICE DETAILS MODAL
            Popup displaying extended information about the selected service.
            ========================================= */}
        <Modal show={showModal} onHide={handleClose} size="lg" centered>
            {activeService && (
                <>
                    <Modal.Header closeButton className="border-0 pb-0">
                    </Modal.Header>
                    <Modal.Body className="px-5 pb-5">
                        <div className="text-center mb-4">
                            <i className={`bi ${activeService.icon} display-4 text-primary mb-3 d-block`}></i>
                            <h2 className="fw-bold">{activeService.title}</h2>
                        </div>
                        <p className="text-muted lead mb-4">{activeService.desc}</p>
                        <hr className="my-4 opacity-25" />
                        <h5 className="fw-bold mb-3">What We Offer</h5>
                        <p className="text-muted mb-4">{activeService.details}</p>
                        <Row>
                            {activeService.features.map((feature, i) => (
                                <Col md={6} key={i} className="mb-2">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                        <span>{feature}</span>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Modal.Body>
                    <Modal.Footer className="border-0 justify-content-center pb-5">
                        <Button variant="secondary" onClick={handleClose} className="rounded-pill px-4">
                            Close
                        </Button>
                        <Button as={Link} to="/contact" variant="primary" className="rounded-pill px-4" onClick={handleClose}>
                            Get Started
                        </Button>
                    </Modal.Footer>
                </>
            )}
        </Modal>

      </Container>
    </div>
  );
};

export default Services;

import React from 'react';
import { Container, Row, Col, Button, Card, Carousel, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* =========================================
          HERO SECTION
          High impact introduction with value prop and primary CTA.
          Background: Gradient overlay with analytics dashboard image.
          ========================================= */}
      <section className="hero-section position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10"></div>
        <Container className="position-relative z-1 py-5">
          <Row className="align-items-center min-vh-75 py-5">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
                  <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill">Digital Marketing Agency</Badge>
              </div>
              <h1 className="display-3 fw-bold mb-4 lh-sm animate-fade-up" style={{animationDelay: '0.2s'}}>
                Scale Your Brand with <span className="text-primary bg-light px-2 rounded">Precision</span> Marketing
              </h1>
              <p className="lead text-muted mb-5 animate-fade-up" style={{maxWidth: '500px', animationDelay: '0.3s'}}>
                We blend data-driven strategies with creative storytelling to turn visitors into loyal customers. Stop guessing, start growing.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 animate-fade-up" style={{animationDelay: '0.4s'}}>
                <Button as={Link} to="/contact" variant="primary" size="lg" className="rounded-pill px-5 shadow-sm">
                  Start Growth
                </Button>
                <Button as={Link} to="/services" variant="outline-dark" size="lg" className="rounded-pill px-5">
                  View Services
                </Button>
              </div>
              <div className="mt-5 d-flex align-items-center gap-3 text-muted small animate-fade-up" style={{animationDelay: '0.5s'}}>
                 <div className="d-flex">
                    {[1,2,3,4,5].map(i => <i key={i} className="bi bi-star-fill text-warning"></i>)}
                 </div>
                 <span>Trusted by 500+ Companies</span>
              </div>
            </Col>
            <Col lg={6}>
               <div className="position-relative text-center">
                  {/* Morphing Blob Background */}
                  <div className="blob-shape"></div>
                  
                  {/* Main Dashboard Image with Float Animation */}
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Analytics Dashboard" 
                    className="img-fluid rounded-4 shadow-lg border border-5 border-white transform-hover animate-float"
                  />
                  
                  {/* Floating ROI Card with Different Speed/Delay */}
                  <Card className="position-absolute bottom-0 start-0 m-4 p-3 border-0 shadow-lg rounded-4 d-none d-md-block animate-float" style={{maxWidth: '200px', animationDelay: '1s'}}>
                     <div className="d-flex align-items-center gap-3">
                        <div className="bg-success bg-opacity-10 p-2 rounded-circle text-success">
                            <i className="bi bi-graph-up-arrow fs-4"></i>
                        </div>
                        <div>
                            <p className="mb-0 text-muted small">ROI Increase</p>
                            <h5 className="mb-0 fw-bold">+150%</h5>
                        </div>
                     </div>
                  </Card>
               </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* =========================================
          TRUSTED BY SECTION
          Social proof with grayscale company logos.
          ========================================= */}
      <div className="py-4 bg-white border-bottom">
        <Container>
            <p className="text-center text-muted small fw-bold text-uppercase ls-2 mb-4">Trusted by industry leaders</p>
            <Row className="justify-content-center align-items-center opacity-50 grayscale-logos g-5">
                {['Google', 'Microsoft', 'Spotify', 'Amazon', 'Slack'].map((brand, idx) => (
                    <Col xs={6} md={2} key={idx} className="text-center">
                        <h4 className="fw-bold text-secondary mb-0">{brand}</h4>
                    </Col>
                ))}
            </Row>
        </Container>
      </div>

      {/* =========================================
          SERVICES SECTION
          Grid of service cards with icons and direct links.
          ========================================= */}
      <section className="py-6 bg-light-alt">
        <Container>
          <div className="text-center mb-5 mw-800 mx-auto">
            <h6 className="text-primary fw-bold text-uppercase">Our Expertise</h6>
            <h2 className="display-5 fw-bold mb-3">Comprehensive Digital Solutions</h2>
            <p className="text-muted lead">We don't just execute services; we build ecosystems that foster growth.</p>
          </div>
          <Row className="g-4">
            {[
              { icon: 'bi-search', title: 'SEO Optimization', desc: 'Dominate search results. We fine-tune your technical SEO and content to drive sustainable organic traffic.', link: '/services#seo' },
              { icon: 'bi-mouse', title: 'PPC Advertising', desc: 'Instant visibility. We build laser-targeted ad campaigns on Google & Social to maximize your ROI.', link: '/services#ppc' },
              { icon: 'bi-people', title: 'Social Media', desc: 'Build a tribe. We create scroll-stopping content that fosters deep connections with your audience.', link: '/services#social' },
              { icon: 'bi-pen', title: 'Content Marketing', desc: 'Tell your story. We craft authority-building articles and videos that educate and convert.', link: '/services#content' },
              { icon: 'bi-code-slash', title: 'Web Development', desc: 'Digital storefronts. We build blazing fast, pixel-perfect websites designed for conversion.', link: '/services#web' },
              { icon: 'bi-envelope', title: 'Email Marketing', desc: 'Nurture leads. We design automated email flows that turn casual browsers into lifetime buyers.', link: '/services#email' },
            ].map((service, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="h-100 p-4 border-0 bg-white service-card">
                  <Card.Body className="d-flex flex-column align-items-start">
                    <div className="service-icon mb-4">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <Card.Title className="fw-bold h4 mb-3">{service.title}</Card.Title>
                    <Card.Text className="text-muted mb-4 flex-grow-1 lh-lg">
                      {service.desc}
                    </Card.Text>
                    <Link to={service.link} className="read-more-link stretched-link">
                        Learn More <i className="bi bi-arrow-right"></i>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* =========================================
          PROCESS SECTION
          Step-by-step breakdown of how the agency works.
          ========================================= */}
      <section className="py-6">
          <Container>
            <Row className="align-items-center">
                <Col lg={5} className="mb-5 mb-lg-0">
                    <h2 className="display-5 fw-bold mb-4">How We Drive Results</h2>
                    <p className="text-muted lead mb-5">Our proven methodology ensures we understand your goals and deliver consistent growth.</p>
                    <div className="d-flex flex-column gap-4">
                        {[
                            { step: '01', title: 'Discovery', text: 'We dive deep into your business model, audience, and competitors.' },
                            { step: '02', title: 'Strategy', text: 'We build a custom roadmap tailored to your specific KPIs.' },
                            { step: '03', title: 'Execution', text: 'Our experts implement the strategy using cutting-edge tools.' },
                            { step: '04', title: 'Optimization', text: 'Continuous monitoring and refining to maximize ROI.' }
                        ].map((item, idx) => (
                            <div className="d-flex gap-4" key={idx}>
                                <div className="display-6 fw-bold text-primary opacity-25">{item.step}</div>
                                <div>
                                    <h5 className="fw-bold">{item.title}</h5>
                                    <p className="text-muted">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col lg={6} className="offset-lg-1">
                    <div className="position-relative">
                        <div className="bg-primary position-absolute top-0 end-0 w-75 h-100 rounded-4 opacity-10 translate-middle-x"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            className="img-fluid rounded-4 shadow-lg position-relative z-1" 
                            alt="Team meeting" 
                        />
                    </div>
                </Col>
            </Row>
          </Container>
      </section>

      {/* =========================================
          RECENT WORK SECTION
          Case study cards with image overlays and results.
          ========================================= */}
      <section className="py-6 bg-light-alt">
          <Container>
            <div className="d-flex justify-content-between align-items-end mb-5">
                <div>
                    <h6 className="text-primary fw-bold text-uppercase">Portfolio</h6>
                    <h2 className="display-5 fw-bold">Recent Success Stories</h2>
                </div>
                <Button as={Link} to="/services" variant="outline-primary" className="rounded-pill d-none d-md-block">View All Work</Button>
            </div>
            <Row className="g-4">
                {[
                    { cat: 'SEO & Content', title: 'Organic Traffic Growth', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', result: '+200% Traffic' },
                    { cat: 'Social Media', title: 'Brand Awareness Campaign', img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', result: '3.5M Impressions' },
                    { cat: 'PPC', title: 'Lead Generation Funnel', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', result: '-40% CPA' },
                ].map((item, idx) => (
                    <Col md={4} key={idx}>
                        <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100 group-hover">
                            <div className="overflow-hidden position-relative">
                                <Card.Img variant="top" src={item.img} className="img-fluid scale-hover transition-all" style={{height: '250px', objectFit: 'cover'}} />
                                <div className="position-absolute bottom-0 start-0 m-3">
                                    <Badge bg="white" text="dark" className="shadow-sm">{item.result}</Badge>
                                </div>
                            </div>
                            <Card.Body className="p-4">
                                <small className="text-primary fw-bold text-uppercase">{item.cat}</small>
                                <Card.Title className="fw-bold mt-2">{item.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
          </Container>
      </section>

      {/* =========================================
          STATS SECTION
          Dark background section highlighting key agency metrics.
          ========================================= */}
      <section className="py-6 bg-dark text-white position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden opacity-25">
             <div className="position-absolute top-50 start-50 translate-middle bg-primary rounded-circle" style={{width: '300px', height: '300px', filter: 'blur(100px)'}}></div>
        </div>
        <Container className="position-relative z-1">
           <Row className="text-center g-5">
              {[
                  { num: '500+', label: 'Clients Served' },
                  { num: '98%', label: 'Retention Rate' },
                  { num: '10M+', label: 'Leads Generated' },
                  { num: '15+', label: 'Years Experience' }
              ].map((stat, idx) => (
                  <Col md={3} key={idx}>
                    <h2 className="fw-bold display-4 text-primary mb-0">{stat.num}</h2>
                    <p className="lead opacity-75">{stat.label}</p>
                  </Col>
              ))}
           </Row>
        </Container>
      </section>

      {/* =========================================
          TESTIMONIALS SECTION
          Carousel of client reviews.
          ========================================= */}
      <section className="py-6">
        <Container>
            <div className="text-center mb-5">
                <h6 className="text-primary fw-bold text-uppercase">Testimonials</h6>
                <h2 className="display-5 fw-bold">What Our Clients Say</h2>
            </div>
            <Row className="justify-content-center">
                <Col lg={8}>
                    <Carousel indicators={false} className="text-center" interval={5000}>
                        {[
                            { text: "TrustMart transformed our online presence. Our sales doubled within 6 months of working with them.", author: "Jane Doe", role: "CEO, TechStart" },
                            { text: "The team is incredible. They are responsive, data-driven, and truly care about our success.", author: "John Smith", role: "Marketing Director, RetailCo" },
                            { text: "Best investment we've made. Their SEO strategy put us on the first page for all our major keywords.", author: "Sarah Lee", role: "Founder, DesignStudio" }
                        ].map((review, idx) => (
                            <Carousel.Item key={idx} className="pb-5">
                                <div className="mb-4">
                                    {[1,2,3,4,5].map(i => <i key={i} className="bi bi-star-fill text-warning fs-5 mx-1"></i>)}
                                </div>
                                <h3 className="fw-medium fst-italic mb-4 lh-base">"{review.text}"</h3>
                                <div>
                                    <h5 className="fw-bold mb-1">{review.author}</h5>
                                    <p className="text-muted small">{review.role}</p>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
      </section>

      {/* =========================================
          CTA SECTION
          Final call to action before footer.
          ========================================= */}
      <section className="py-6 bg-primary text-white text-center">
          <Container>
              <Col lg={8} className="mx-auto">
                <h2 className="display-4 fw-bold mb-4">Ready to Dominate Your Market?</h2>
                <p className="lead mb-5 opacity-90">Join hundreds of successful businesses who have scaled with TrustMart. Let's build your success story today.</p>
                <div className="d-flex justify-content-center gap-3">
                    <Button as={Link} to="/contact" variant="light" size="lg" className="rounded-pill px-5 text-primary fw-bold shadow">
                        Get Your Free Proposal
                    </Button>
                </div>
              </Col>
          </Container>
      </section>
    </>
  );
};

export default Home;

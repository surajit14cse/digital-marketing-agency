import React from 'react';
import { Container, Row, Col, Button, Card, Carousel, Badge, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { faqData } from '../data/faq';

// Import Local Images
import dashboardImg from '../assets/images/home/dashboard.jpg';
import processImg from '../assets/images/home/process.jpg';
import avatar1 from '../assets/images/avatars/avatar-1.jpg';
import avatar2 from '../assets/images/avatars/avatar-2.jpg';
import avatar3 from '../assets/images/avatars/avatar-3.jpg';
import avatar4 from '../assets/images/avatars/avatar-4.jpg';

const avatars = [avatar1, avatar2, avatar3, avatar4];

const Home = () => {
  return (
    <>
      {/* =========================================
          HERO SECTION
          High impact introduction with value prop and primary CTA.
          Background: Gradient overlay with analytics dashboard image.
          ========================================= */}
      <section className="hero-section hero-gradient-mesh position-relative overflow-hidden min-vh-100 d-flex align-items-center pt-5">
        <Container className="position-relative z-1 pt-5">
          <Row className="align-items-center py-5">
            <Col lg={6} className="mb-5 mb-lg-0 pt-4">
              <div data-aos="fade-up" data-aos-delay="100">
                  <Badge bg="white" className="mb-4 px-3 py-2 rounded-pill text-primary shadow-sm border fw-normal border-primary border-opacity-25">
                      <i className="bi bi-rocket-takeoff-fill me-2"></i> #1 Digital Marketing Agency
                  </Badge>
              </div>
              <h1 className="display-3 fw-bold mb-4 lh-sm ls-tight" data-aos="fade-up" data-aos-delay="200">
                Scale Your Brand with <br/>
                <span className="text-gradient-primary">Precision Marketing</span>
              </h1>
              <p className="lead text-muted mb-5" style={{maxWidth: '540px'}} data-aos="fade-up" data-aos-delay="300">
                We blend data-driven strategies with creative storytelling to turn visitors into loyal customers. Stop guessing, start growing.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3" data-aos="fade-up" data-aos-delay="400">
                <Button as={Link} to="/contact" variant="primary" size="lg" className="rounded-pill px-5 shadow hover-up bg-gradient-primary border-0">
                  Start Growth
                </Button>
                <Button as={Link} to="/services" variant="white" size="lg" className="rounded-pill px-5 shadow-sm hover-up border bg-white text-dark">
                  View Services
                </Button>
              </div>
              
              <div className="mt-5 d-flex align-items-center gap-3 text-muted small" data-aos="fade-up" data-aos-delay="500">
                 <div className="d-flex align-items-center">
                    <div className="d-flex">
                        {avatars.map((avatar, i) => (
                            <img 
                                key={i}
                                src={avatar} 
                                alt="User" 
                                className="rounded-circle border border-2 border-white"
                                style={{width: '40px', height: '40px', marginLeft: i === 0 ? 0 : '-15px'}}
                            />
                        ))}
                    </div>
                 </div>
                 <div className="border-start ps-3 ms-2">
                     <div className="d-flex text-warning mb-1">
                        {[1,2,3,4,5].map(i => <i key={i} className="bi bi-star-fill small"></i>)}
                     </div>
                     <span className="fw-semibold text-dark">Trusted by 500+ Companies</span>
                 </div>
              </div>
            </Col>
            
            {/* 3D Animated Hero Image Section */}
            <Col lg={6} className="hero-perspective d-none d-lg-block">
               <div className="position-relative text-center d-flex justify-content-center align-items-center" style={{height: '600px'}}>
                  
                  {/* Morphing Blob Background (Behind 3D elements) */}
                  <div className="blob-shape" style={{opacity: 0.8, transform: 'scale(1.2)'}}></div>

                  {/* Main 3D Card Container */}
                  <div className="hero-3d-card position-relative animate-float">
                      <img 
                        src={dashboardImg}
                        alt="Analytics Dashboard" 
                        className="img-fluid rounded-4 border border-5 border-white shadow-lg"
                        style={{width: '650px', transformStyle: 'preserve-3d'}}
                      />

                      {/* Floating Element 1: ROI Card */}
                      <Card className="position-absolute bottom-0 start-0 m-4 p-3 border-0 shadow-lg rounded-4 text-start animate-float" 
                            style={{maxWidth: '220px', transform: 'translateZ(60px)', left: '-40px', animationDelay: '1s'}}>
                         <div className="d-flex align-items-center gap-3">
                            <div className="bg-success bg-opacity-10 p-3 rounded-circle text-success">
                                <i className="bi bi-graph-up-arrow fs-4"></i>
                            </div>
                            <div>
                                <p className="mb-0 text-muted small fw-bold text-uppercase ls-1">ROI Increase</p>
                                <h4 className="mb-0 fw-bold text-dark">+150%</h4>
                            </div>
                         </div>
                      </Card>

                      {/* Floating Element 2: Users Card */}
                      <Card className="position-absolute top-0 end-0 m-4 p-2 border-0 shadow-lg rounded-pill px-4 py-2 animate-float" 
                            style={{transform: 'translateZ(40px)', right: '-30px', top: '60px', animationDelay: '2s'}}>
                          <div className="d-flex align-items-center gap-2">
                             <div className="d-flex align-items-center bg-light rounded-circle justify-content-center" style={{width: '32px', height:'32px'}}>
                                <i className="bi bi-people-fill text-primary"></i>
                             </div>
                             <div>
                                 <small className="d-block text-muted" style={{fontSize: '10px', lineHeight: '1'}}>Active Users</small>
                                 <small className="fw-bold ps-0 text-dark">2,450+</small>
                             </div>
                          </div>
                      </Card>
                  </div>

                  {/* Orbiting Icons */}
                  <div className="orbit-container">
                      <div className="orbit-item orbit-1" title="SEO">
                          <i className="bi bi-search"></i>
                      </div>
                      <div className="orbit-item orbit-2" title="Analytics">
                          <i className="bi bi-bar-chart-fill"></i>
                      </div>
                      <div className="orbit-item orbit-3" title="Targeting">
                          <i className="bi bi-bullseye"></i>
                      </div>
                  </div>

               </div>
            </Col>

            {/* Mobile Fallback (Simple Image) */}
            <Col lg={6} className="d-lg-none mt-5">
                <div className="position-relative">
                    <div className="blob-shape opacity-50"></div>
                    <img 
                        src={dashboardImg}
                        alt="Analytics Dashboard" 
                        className="img-fluid rounded-4 shadow-lg border border-5 border-white position-relative z-1"
                    />
                </div>
            </Col>

          </Row>

          {/* Scroll Down Indicator */}
          <a href="#trusted-by" className="scroll-down-btn d-none d-md-flex">
              <span className="mouse">
                  <span className="wheel"></span>
              </span>
              <span>Scroll Down</span>
          </a>
        </Container>
      </section>

      {/* =========================================
          TRUSTED BY SECTION
          Social proof with grayscale company logos.
          ========================================= */}
      <div id="trusted-by" className="py-5 bg-white border-bottom">
        <Container>
            <p className="text-center text-muted small fw-bold text-uppercase ls-2 mb-5" data-aos="fade-in">Trusted by industry leaders</p>
            <Row className="justify-content-center align-items-center opacity-50 grayscale-logos g-5" data-aos="fade-up">
                {['Google', 'Microsoft', 'Spotify', 'Amazon', 'Slack'].map((brand, idx) => (
                    <Col xs={6} md={2} key={idx} className="text-center">
                        <h4 className="fw-bold text-secondary mb-0 display-6">{brand}</h4>
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
            <h6 className="text-primary fw-bold text-uppercase ls-2">Our Expertise</h6>
            <h2 className="display-4 fw-bold mb-3">Comprehensive Digital Solutions</h2>
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
              <Col md={6} lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
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
      <section className="py-6 position-relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Process Background" 
                className="w-100 h-100 object-fit-cover"
                style={{ filter: 'brightness(1.1)' }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-95"></div>
          </div>

          <Container className="position-relative z-1">
            <Row className="align-items-center">
                <Col lg={5} className="mb-5 mb-lg-0">
                    <h6 className="text-primary fw-bold text-uppercase ls-2 mb-2">Our Process</h6>
                    <h2 className="display-4 fw-bold mb-4">How We Drive Results</h2>
                    <p className="text-muted lead mb-5">Our proven methodology ensures we understand your goals and deliver consistent growth.</p>
                    <div className="d-flex flex-column gap-4">
                        {[
                            { step: '01', title: 'Discovery', text: 'We dive deep into your business model, audience, and competitors.' },
                            { step: '02', title: 'Strategy', text: 'We build a custom roadmap tailored to your specific KPIs.' },
                            { step: '03', title: 'Execution', text: 'Our experts implement the strategy using cutting-edge tools.' },
                            { step: '04', title: 'Optimization', text: 'Continuous monitoring and refining to maximize ROI.' }
                        ].map((item, idx) => (
                            <div className="d-flex gap-4 group-hover" key={idx} data-aos="fade-left" data-aos-delay={idx * 100}>
                                <div className="display-6 fw-bold text-primary opacity-25 group-hover-opacity-100 transition-all">{item.step}</div>
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
                        <div className="bg-gradient-primary position-absolute top-0 end-0 w-75 h-100 rounded-4 opacity-10 translate-middle-x"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            className="img-fluid rounded-4 shadow-lg position-relative z-1 hover-up" 
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
                    <h6 className="text-primary fw-bold text-uppercase ls-2">Portfolio</h6>
                    <h2 className="display-4 fw-bold">Recent Success Stories</h2>
                </div>
                <Button as={Link} to="/services" variant="outline-primary" className="rounded-pill d-none d-md-block px-4">View All Work</Button>
            </div>
            <Row className="g-4">
                {portfolioData.slice(0, 3).map((project, idx) => (
                    <Col md={4} key={project.id} data-aos="zoom-in" data-aos-delay={idx * 100}>
                        <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100 group-hover cursor-pointer">
                            <div className="overflow-hidden position-relative">
                                <Card.Img variant="top" src={project.image} className="img-fluid scale-hover transition-all" style={{height: '250px', objectFit: 'cover'}} />
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 group-hover-visible transition-all"></div>
                                <div className="position-absolute bottom-0 start-0 m-3">
                                    <Badge bg="white" text="dark" className="shadow-sm">{project.category}</Badge>
                                </div>
                                <div className="position-absolute top-50 start-50 translate-middle group-hover-visible transition-all">
                                     <div className="bg-white rounded-circle p-3 shadow-lg">
                                         <i className="bi bi-arrow-up-right text-primary fs-4"></i>
                                     </div>
                                </div>
                            </div>
                            <Card.Body className="p-4">
                                <Card.Title className="fw-bold mt-2 hover-primary">{project.title}</Card.Title>
                                <Card.Text className="text-muted small text-truncate">{project.description}</Card.Text>
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
      <section className="py-6 bg-dark text-white position-relative overflow-hidden">
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
                    <h2 className="fw-bold display-4 text-gradient-primary mb-0">{stat.num}</h2>
                    <p className="lead opacity-75">{stat.label}</p>
                  </Col>
              ))}
           </Row>
        </Container>
      </section>

      {/* =========================================
          FAQ SECTION
          Accordion for frequently asked questions.
          ========================================= */}
      <section className="py-6 bg-light-alt">
        <Container>
            <div className="text-center mb-5 mw-800 mx-auto" data-aos="fade-up">
                <h6 className="text-primary fw-bold text-uppercase ls-2">FAQ</h6>
                <h2 className="display-4 fw-bold mb-3">Common Questions</h2>
                <p className="text-muted lead">Everything you need to know about working with us.</p>
            </div>
            <Row className="justify-content-center">
                <Col lg={8}>
                    <Accordion className="shadow-sm rounded-3 overflow-hidden bg-white" data-aos="fade-up" data-aos-delay="200">
                        {faqData.map((faq, index) => (
                            <Accordion.Item eventKey={index.toString()} key={faq.id} className="border-0 border-bottom">
                                <Accordion.Header className="fw-bold py-3">{faq.question}</Accordion.Header>
                                <Accordion.Body className="text-muted lh-lg pb-4">
                                    {faq.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
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
                <h6 className="text-primary fw-bold text-uppercase ls-2">Testimonials</h6>
                <h2 className="display-4 fw-bold">What Our Clients Say</h2>
            </div>
            <Row className="justify-content-center">
                <Col lg={8}>
                    <Carousel indicators={true} variant="dark" className="text-center pb-5" interval={5000}>
                        {[
                            { text: "TrustMart transformed our online presence. Our sales doubled within 6 months of working with them.", author: "Jane Doe", role: "CEO, TechStart" },
                            { text: "The team is incredible. They are responsive, data-driven, and truly care about our success.", author: "John Smith", role: "Marketing Director, RetailCo" },
                            { text: "Best investment we've made. Their SEO strategy put us on the first page for all our major keywords.", author: "Sarah Lee", role: "Founder, DesignStudio" }
                        ].map((review, idx) => (
                            <Carousel.Item key={idx} className="pb-5">
                                <div className="mb-4">
                                    {[1,2,3,4,5].map(i => <i key={i} className="bi bi-star-fill text-warning fs-5 mx-1"></i>)}
                                </div>
                                <h3 className="fw-medium fst-italic mb-5 lh-base px-lg-5">"{review.text}"</h3>
                                <div>
                                    <h5 className="fw-bold mb-1">{review.author}</h5>
                                    <p className="text-muted small text-uppercase ls-1">{review.role}</p>
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
      <section className="py-6 bg-gradient-primary text-white text-center">
          <Container>
              <Col lg={8} className="mx-auto">
                <h2 className="display-3 fw-bold mb-4">Ready to Dominate Your Market?</h2>
                <p className="lead mb-5 opacity-90">Join hundreds of successful businesses who have scaled with TrustMart. Let's build your success story today.</p>
                <div className="d-flex justify-content-center gap-3">
                    <Button as={Link} to="/contact" variant="light" size="lg" className="rounded-pill px-5 text-primary fw-bold shadow hover-up">
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
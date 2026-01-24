import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { teamData } from '../data/team';
import { historyData, cultureImages } from '../data/about-extras';

// Import Local Images
import heroImg from '../assets/images/about/hero.jpg';

const About = () => {
  return (
    <>
      {/* =========================================
          HEADER SECTION
          Agency story and vision.
          ========================================= */}
      <section className="overflow-hidden" style={{ padding: '10rem 0 5rem 0' }}>
          <Container>
            <Row className="align-items-center mb-5">
                <Col lg={6} className="mb-5 mb-lg-0">
                    <Badge bg="primary" className="mb-3 px-3 py-2 rounded-pill">Our Story</Badge>
                    <h1 className="fw-bold display-4 mb-4">We are more than just a digital agency.</h1>
                    <p className="lead text-muted mb-4">
                        Founded in 2020, TrustMart Digital Agency was born from a simple belief: 
                        <strong> Data beats opinion.</strong>
                    </p>
                    <p className="text-muted mb-4">
                        We started as a small team of SEO specialists and have grown into a full-service digital marketing partner. 
                        Our mission is to empower businesses with transparent, results-oriented marketing strategies that deliver measurable growth. 
                        We don't just execute campaigns; we build partnerships that last.
                    </p>
                    <div className="d-flex gap-3">
                         <Button as={Link} to="/contact" variant="primary" className="rounded-pill px-4">Let's Talk</Button>
                         <Button as={Link} to="/portfolio" variant="outline-dark" className="rounded-pill px-4">View Our Work</Button>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="position-relative ps-lg-5">
                         <div className="bg-warning position-absolute top-0 end-0 w-75 h-75 rounded-4 opacity-10 translate-middle-x mt-n4 me-n4"></div>
                         <img 
                            src={heroImg} 
                            alt="Team working together" 
                            className="img-fluid rounded-4 shadow-lg position-relative z-1"
                        />
                    </div>
                </Col>
            </Row>
          </Container>
      </section>

      {/* =========================================
          CORE VALUES SECTION
          Three column grid with icons.
          ========================================= */}
      <section className="py-6 bg-light-alt">
         <Container>
             <div className="text-center mb-5 mw-800 mx-auto">
                <h6 className="text-primary fw-bold text-uppercase">Our DNA</h6>
                <h2 className="display-5 fw-bold">Values That Drive Us</h2>
             </div>
             <Row className="g-4">
                 {[
                     { icon: "bi-graph-up-arrow", title: "Data-Driven", desc: "We don't guess. Every decision is backed by analytics and real-world performance metrics." },
                     { icon: "bi-people-fill", title: "Client-Centric", desc: "Your goals are our goals. We view ourselves as an extension of your internal team." },
                     { icon: "bi-lightbulb-fill", title: "Constant Innovation", desc: "The digital landscape never stops evolving, and neither do we. We stay ahead of the curve." }
                 ].map((value, idx) => (
                     <Col md={4} key={idx}>
                         <Card className="h-100 border-0 shadow-sm p-4 text-center hover-y-shift transition-all">
                             <div className="mx-auto mb-4 bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                                 <i className={`bi ${value.icon} fs-2 text-primary`}></i>
                             </div>
                             <Card.Title className="fw-bold h4">{value.title}</Card.Title>
                             <Card.Text className="text-muted">{value.desc}</Card.Text>
                         </Card>
                     </Col>
                 ))}
             </Row>
         </Container>
      </section>

      {/* =========================================
          TIMELINE SECTION (NEW)
          Vertical journey of the company.
          ========================================= */}
      <section className="py-6 overflow-hidden">
          <Container>
              <div className="text-center mb-6">
                  <Badge bg="info" bg-opacity="10" text="white" className="mb-3 px-3 py-2 rounded-pill border border-info border-opacity-25">Our Journey</Badge>
                  <h2 className="display-5 fw-bold mb-3">From Start-up to Scale-up</h2>
                  <p className="text-muted lead mx-auto" style={{maxWidth: '600px'}}>
                      Every milestone represents a step forward in our commitment to excellence.
                  </p>
              </div>

              <div className="timeline-section py-4">
                  {historyData.map((item, idx) => (
                      <div className="timeline-item" key={idx} data-aos="fade-up">
                          {/* Central Dot */}
                          <div className="timeline-dot shadow-sm">
                              <i className={`bi ${item.icon} fs-5`}></i>
                          </div>
                          
                          {/* Content Box */}
                          <div className="timeline-content text-start">
                              <span className="display-6 fw-bold text-primary opacity-25 mb-2 d-block">{item.year}</span>
                              <h4 className="fw-bold mb-3">{item.title}</h4>
                              <p className="text-muted mb-0">{item.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </Container>
      </section>

      {/* =========================================
          STATS / TIMELINE STRIP
          Key achievements bar.
          ========================================= */}
      <section className="py-5 bg-dark text-white">
          <Container>
              <Row className="text-center gy-4 justify-content-center">
                   <Col xs={6} md={3} className="border-end border-secondary border-opacity-25">
                       <div className="display-6 fw-bold text-primary mb-0">
                           <CountUp end={2020} duration={2.5} enableScrollSpy scrollSpyOnce />
                       </div>
                       <small className="text-uppercase ls-1 opacity-75">Year Founded</small>
                   </Col>
                   <Col xs={6} md={3} className="border-end border-secondary border-opacity-25">
                       <div className="display-6 fw-bold text-primary mb-0">
                           <CountUp end={50} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
                       </div>
                       <small className="text-uppercase ls-1 opacity-75">Team Members</small>
                   </Col>
                   <Col xs={6} md={3} className="border-end border-secondary border-opacity-25">
                       <div className="display-6 fw-bold text-primary mb-0">
                           <CountUp end={350} duration={2.5} suffix="+" enableScrollSpy scrollSpyOnce />
                       </div>
                       <small className="text-uppercase ls-1 opacity-75">Projects Launched</small>
                   </Col>
                   <Col xs={6} md={3}>
                       <div className="display-6 fw-bold text-primary mb-0">
                           <CountUp end={15} duration={2.5} enableScrollSpy scrollSpyOnce />
                       </div>
                       <small className="text-uppercase ls-1 opacity-75">Industry Awards</small>
                   </Col>
              </Row>
          </Container>
      </section>

      {/* =========================================
          TEAM SECTION
          Dynamic team grid from data file.
          ========================================= */}
      <section className="py-6 bg-white position-relative overflow-hidden">
        {/* Background Decoration */}
        <div className="position-absolute top-0 end-0 translate-middle rounded-circle bg-light opacity-50" style={{width: '600px', height: '600px', zIndex: 0}}></div>

        <Container className="position-relative z-1">
            <div className="text-center mb-6" data-aos="fade-up">
                <Badge bg="primary" bg-opacity="10" text="primary" className="mb-3 px-3 py-2 rounded-pill bg-opacity-10">The Squad</Badge>
                <h2 className="display-4 fw-bold mb-3">Meet The Experts</h2>
                <p className="text-muted lead mx-auto" style={{maxWidth: '600px'}}>
                    The creative minds and data wizards behind our clients' success.
                </p>
            </div>
            
            <Row className="g-5 justify-content-center">
                {teamData.map((member, idx) => (
                    <Col md={6} lg={3} key={member.id} data-aos="fade-up" data-aos-delay={idx * 100}>
                        <div className="team-member group-hover text-center">
                            
                            {/* Image Container with Gradient Border Effect */}
                            <div className="position-relative d-inline-block mb-4">
                                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-pill bg-gradient-primary opacity-0 group-hover-opacity-100 transition-all duration-500" 
                                     style={{ transform: 'scale(1.05)', zIndex: 0 }}></div>
                                
                                <div className="image-wrapper rounded-pill overflow-hidden position-relative shadow-lg z-1" style={{width: '260px', height: '320px'}}>
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-100 h-100 object-fit-cover scale-hover transition-all duration-500" 
                                    />
                                    
                                    {/* Socials Overlay (Slide Up) */}
                                    <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-white bg-opacity-90 backdrop-blur transform-translate-y-100 group-hover-slide-up transition-all duration-300">
                                        <div className="d-flex justify-content-center gap-3">
                                            <a href={member.socials.linkedin} className="text-dark hover-primary transition-all"><i className="bi bi-linkedin fs-5"></i></a>
                                            <a href={member.socials.twitter} className="text-dark hover-primary transition-all"><i className="bi bi-twitter-x fs-5"></i></a>
                                            <a href="#" className="text-dark hover-primary transition-all"><i className="bi bi-envelope-fill fs-5"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div>
                                <h4 className="fw-bold mb-1">{member.name}</h4>
                                <p className="text-primary fw-bold small text-uppercase ls-1 mb-3">{member.role}</p>
                                <p className="text-muted small mx-auto opacity-75" style={{maxWidth: '250px'}}>
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
      </section>

      {/* =========================================
          CULTURE / LIFE AT COMPANY (NEW)
          Photo gallery.
          ========================================= */}
      <section className="py-6 bg-light-alt">
          <Container>
              <Row className="align-items-center mb-5">
                  <Col lg={6}>
                      <h2 className="display-5 fw-bold mb-3">Life at TrustMart</h2>
                      <p className="text-muted lead">
                          We work hard, but we also know how to have fun. Our culture is built on collaboration, continuous learning, and plenty of coffee.
                      </p>
                  </Col>
                  <Col lg={6} className="text-lg-end">
                      <Button as={Link} to="/contact" variant="outline-primary" className="rounded-pill px-4">Join Our Team</Button>
                  </Col>
              </Row>

              <Row className="g-4">
                  {cultureImages.map((img, idx) => (
                      <Col md={6} lg={3} key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                          <div className="culture-card shadow-sm cursor-pointer group-hover">
                              <img src={img} alt="Office culture" className="img-fluid" />
                              <div className="overlay">
                                  <p className="text-white fw-bold mb-0">Team Collaboration</p>
                              </div>
                          </div>
                      </Col>
                  ))}
              </Row>
          </Container>
      </section>

      {/* =========================================
          CAREERS CTA
          Invitation to join the team.
          ========================================= */}
      <section className="py-6 bg-primary text-white text-center">
          <Container>
              <div className="mx-auto mw-800">
                  <h2 className="display-5 fw-bold mb-4">Love What We Do? Join Us!</h2>
                  <p className="lead opacity-90 mb-5">
                      We are always looking for talented individuals to join our growing team. 
                      If you are passionate about digital marketing, we want to hear from you.
                  </p>
                  <Button as={Link} to="/contact" variant="light" size="lg" className="rounded-pill px-5 text-primary fw-bold shadow-sm">
                      View Open Positions
                  </Button>
              </div>
          </Container>
      </section>
    </>
  );
};

export default About;

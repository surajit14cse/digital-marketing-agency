import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <div className="py-5">
      <Container>
        <Row className="align-items-center mb-5">
            <Col lg={6}>
                <h1 className="fw-bold display-5 mb-4">About TrustMart</h1>
                <p className="lead text-muted mb-4">
                    Founded in 2020, TrustMart Digital Agency was born from a simple belief: 
                    <strong> Data beats opinion.</strong>
                </p>
                <p className="text-muted">
                    We started as a small team of SEO specialists and have grown into a full-service digital marketing agency. 
                    Our mission is to empower businesses with transparent, results-oriented marketing strategies that deliver measurable growth. 
                    We don't just execute campaigns; we build partnerships.
                </p>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0">
                <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Team working together" 
                    className="img-fluid rounded-4 shadow"
                />
            </Col>
        </Row>

        <div className="mb-5">
            <h2 className="text-center fw-bold mb-5">Meet The Team</h2>
            <Row className="g-4">
                {[
                    { name: "Sarah Johnson", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                    { name: "Michael Chen", role: "Head of SEO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                    { name: "Jessica Williams", role: "Creative Director", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
                    { name: "David Miller", role: "Lead Developer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
                ].map((member, idx) => (
                    <Col md={3} sm={6} key={idx}>
                        <Card className="border-0 shadow-sm text-center h-100">
                            <Card.Img variant="top" src={member.img} className="object-fit-cover" style={{height: '250px'}} />
                            <Card.Body>
                                <Card.Title className="fw-bold">{member.name}</Card.Title>
                                <Card.Text className="text-muted small">{member.role}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    // Here you would typically send the data to a backend
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="py-5">
      <Container>
        <Row className="justify-content-center">
            <Col lg={8} className="text-center mb-5">
                <h1 className="fw-bold display-5">Get In Touch</h1>
                <p className="lead text-muted">Ready to start your digital transformation? Send us a message.</p>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col lg={5} className="mb-5 mb-lg-0">
                <div className="bg-primary text-white p-5 rounded-4 shadow h-100">
                    <h3 className="fw-bold mb-4">Contact Information</h3>
                    <div className="mb-4">
                        <h6 className="opacity-75 text-uppercase small ls-1">Address</h6>
                        <p className="fs-5">123 Digital Ave, Tech City, TC 90210</p>
                    </div>
                    <div className="mb-4">
                        <h6 className="opacity-75 text-uppercase small ls-1">Phone</h6>
                        <p className="fs-5">+1 (555) 123-4567</p>
                    </div>
                    <div className="mb-4">
                        <h6 className="opacity-75 text-uppercase small ls-1">Email</h6>
                        <p className="fs-5">hello@trustmart.com</p>
                    </div>
                    <div className="mt-5">
                        <h6 className="opacity-75 text-uppercase small ls-1 mb-3">Follow Us</h6>
                        <div className="d-flex gap-3 fs-4">
                            <i className="bi bi-facebook cursor-pointer"></i>
                            <i className="bi bi-twitter cursor-pointer"></i>
                            <i className="bi bi-linkedin cursor-pointer"></i>
                            <i className="bi bi-instagram cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className="bg-white p-5 rounded-4 shadow-sm border">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Your Name" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="name@example.com" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="How can we help?" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label>Message</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={5} 
                                placeholder="Tell us about your project..." 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" size="lg" className="w-100 rounded-pill">
                            Send Message
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

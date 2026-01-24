import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';
import { portfolioData, categories } from '../data/portfolio';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  // Filter Logic
  let filteredProjects = activeCategory === "All"
    ? [...portfolioData]
    : portfolioData.filter(project => project.category === activeCategory);

  // Sort Logic
  filteredProjects.sort((a, b) => {
      if (sortOrder === "newest") return b.id - a.id; // Assuming higher ID is newer
      if (sortOrder === "oldest") return a.id - b.id;
      if (sortOrder === "az") return a.title.localeCompare(b.title);
      return 0;
  });

  return (
    <div className="portfolio-page">
      {/* =========================================
          HERO SECTION
          Dark gradient background with Portfolio highlights.
          ========================================= */}
      <section className="position-relative overflow-hidden text-white d-flex align-items-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '10rem 0' }}>
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-10"></div>
          {/* Decorative Elements */}
          <div className="position-absolute top-50 start-0 translate-middle rounded-circle bg-white opacity-10" style={{width: '300px', height: '300px', filter: 'blur(80px)'}}></div>
          
          <Container className="position-relative z-1 text-center">
              <Badge bg="white" text="primary" className="mb-3 px-3 py-2 rounded-pill shadow-sm" data-aos="fade-down">Our Portfolio</Badge>
              <h1 className="display-3 fw-bold mb-4 text-white" data-aos="fade-up" data-aos-delay="100">Work That <span className="text-warning">Inspires.</span></h1>
              <p className="lead text-white-50 mx-auto mb-0" style={{maxWidth: '700px'}} data-aos="fade-up" data-aos-delay="200">
                Explore a curated selection of our most impactful projects, from viral campaigns to enterprise-grade web applications.
              </p>
          </Container>
      </section>

      <Container className="py-6">
        
        {/* Filters Toolbar */}
        <div className="row mb-5 g-3 align-items-center justify-content-center justify-content-lg-between" data-aos="fade-up" data-aos-delay="200">
            
            {/* Desktop Category Buttons (Hidden on Mobile) */}
            <div className="col-lg-auto d-none d-lg-block">
                <div className="d-flex flex-wrap gap-2 align-items-center">
                {categories.map((category) => (
                    <Button
                    key={category}
                    variant={activeCategory === category ? "primary" : "outline-secondary"}
                    onClick={() => setActiveCategory(category)}
                    className="rounded-pill px-4 d-inline-flex align-items-center justify-content-center"
                    style={{ height: '40px' }} 
                    >
                    {category}
                    </Button>
                ))}
                </div>
            </div>

            {/* Mobile Category Dropdown (Hidden on Desktop) */}
            <div className="col-12 d-lg-none">
                <Form.Select 
                    value={activeCategory} 
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="shadow-sm border-secondary-subtle"
                >
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </Form.Select>
            </div>

            {/* Sort Dropdown (Visible Always) */}
            <div className="col-auto ms-auto">
                <div className="d-flex align-items-center gap-2">
                    <span className="text-muted small fw-bold text-nowrap">Sort By:</span>
                    <Form.Select 
                        size="sm" 
                        value={sortOrder} 
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border-secondary-subtle"
                        style={{minWidth: '150px'}}
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="az">Name (A-Z)</option>
                    </Form.Select>
                </div>
            </div>
        </div>

        {/* Projects Grid */}
        <Row className="g-4">
          {filteredProjects.map((project, idx) => (
            <Col key={project.id} md={6} lg={4} data-aos="fade-up" data-aos-delay={idx * 50}>
              <Card className="h-100 border-0 shadow-lg rounded-4 overflow-hidden group-hover position-relative">
                {/* Image Container with Zoom Effect */}
                <div className="overflow-hidden position-relative" style={{ height: '250px' }}>
                    <Card.Img 
                        variant="top" 
                        src={project.image} 
                        alt={project.title}
                        className="w-100 h-100 object-fit-cover scale-hover transition-all duration-500"
                    />
                    {/* Overlay Gradient on Hover */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50 opacity-0 group-hover-visible transition-all d-flex align-items-center justify-content-center">
                        <Button variant="light" className="rounded-pill fw-bold px-4 transform-translate-y-0 opacity-0 group-hover-slide-up transition-all delay-100">
                            View Case Study
                        </Button>
                    </div>
                    {/* Floating Category Badge */}
                    <div className="position-absolute top-0 end-0 m-3">
                        <Badge bg="white" text="dark" className="shadow-sm border px-3 py-2 rounded-pill text-uppercase small ls-1 fw-bold">
                            {project.category}
                        </Badge>
                    </div>
                </div>

                <Card.Body className="p-4 bg-white position-relative z-1">
                  <h5 className="fw-bold mb-2">{project.title}</h5>
                  <p className="text-muted small mb-0 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3 pt-3 border-top d-flex align-items-center text-primary fw-bold small">
                      <span>Read Success Story</span>
                      <i className="bi bi-arrow-right ms-2 group-hover-translate-x transition-all"></i>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <h4 className="text-muted">No projects found in this category.</h4>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Portfolio;

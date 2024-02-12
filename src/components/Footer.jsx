import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-light text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      </section>

      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            

            <Col md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Hobbycue</h6>
              <p>
                <a href='#!' className='text-reset'>
                About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Our Services
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Work with Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                FAQ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Contact Us
                </a>
              </p>
            </Col>

            <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>How Do I</h6>
              <p>
                <a href='#!' className='text-reset'>
                Sign Up
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Add a Listing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Claim Listing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Post a Query
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Add a Blog Post
               </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Other Queries
                </a>
              </p>
            </Col>

            <Col md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
              Listings
              </p>
              <p>
              Blog Posts
              </p>
              <p>
              Shop / Store
              </p>
              <p>
              Community
              </p>
            </Col>
            <Col>
            <div className='me-5 d-none d-lg-block mb-2'>
          <span><b>Social Media</b></span>
        </div>
            <div>
          <a href='/' className='me-4 text-reset'>
            
            <i class="bi bi-facebook"></i>
          </a>
          <a href='/' className='me-4 text-reset'>
            <i class="bi bi-twitter"></i>
          </a>
          <a href='/' className='me-4 text-reset'>
          <i class="bi bi-google"></i>
          </a>
          <a href='/' className='me-4 text-reset'>
            <i class="bi bi-instagram"></i>
          </a>
          <a href='/' className='me-4 text-reset'>
          <i class="bi bi-pinterest"></i>
          </a>
          <a href='/' className='me-4 text-reset'>
          <i class="bi bi-telegram"></i>
          </a>
          <a href='/' className='me-4 text-reset'>
          <i class="bi bi-youtube"></i>

          </a>
          <a href='/' className='me-4 text-reset'>
            <i class="bi bi-envelope-fill"></i>

          </a>
        </div>
        <div style={{padding: '0'}}>
        <div className='me-5 mt-3 d-none d-lg-block mb-2' style={{margin: '20px 0'}}>
          <span><b>Invite Friends</b></span>
        </div>
        <Form className="d-flex flex-column align-items-center align-items-md-start searcharea">
            <Form.Control
              type="search"
              placeholder="Email ID"
              className="me-2 mb-2"
              aria-label="Search"
            />
            <Button variant="outline-success" 
            style={{borderColor: "#8064a2", color: "#fff", backgroundColor: "#8064a2", borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}}>
                Invite</Button>
          </Form>
        </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <p><b>© Purple Cues Private Limited</b> </p>
    
      </div>
    </footer>
  );
};

export default Footer;

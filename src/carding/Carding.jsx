import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Cardimg() {
  return (
    <Container className='pt-5'>
      <Row>
        <Col xs={12} md={6}>
          <Card className="custom-card" style={{ padding: "20px", margin: "20px" }}>
            <Card.Body>
              <Card.Title><i className="bi bi-people-fill text-primary icon1"></i> People</Card.Title>
              <Card.Text>
                Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator.
              </Card.Text>
              <Button className="btn btn-light " style={{ color: '#8064A2', borderColor: '#8064A2' }}>Connect</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card className="custom-card" style={{ padding: "20px", margin: "20px" }}>
            <Card.Body >
              <Card.Title><i className="bi bi-geo-alt-fill text-success icon2"></i> Place</Card.Title>
              <Card.Text>
                Find a class, school, playground, auditorium, studio, shop, or an event venue. Book a slot at venues that allow booking through hobbycue.
              </Card.Text>
              <Button className="btn btn-light " style={{ color: '#8064A2', borderColor: '#8064A2' }}>Meet up</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6}>
          <Card className="custom-card" style={{ padding: "20px", margin: "20px" }}>
            <Card.Body>
              <Card.Title><i className="bi bi-basket3-fill text-danger icon3"></i> Product</Card.Title>
              <Card.Text>
                Find equipment or supplies required for your hobby. Buy, rent, or borrow from shops, online stores, or community members.
              </Card.Text>
              <Button className="btn btn-light " style={{ color: '#8064A2', borderColor: '#8064A2' }}>Get it</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card className="custom-card" style={{ padding: "20px", margin: "20px" }}>
            <Card.Body>
              <Card.Title><i className="bi bi-calendar-check-fill text-info icon4"></i> Program</Card.Title>
              <Card.Text>
                Find events, meetups, and workshops related to your hobby. Register or buy tickets online.
              </Card.Text>
              <Button className="btn btn-light " style={{ color: '#8064A2', borderColor: '#8064A2' }}>Attend</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cardimg;

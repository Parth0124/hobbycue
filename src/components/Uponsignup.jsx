import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Signupform from './Signupform'; // Importing Signupform component
import Loginform from './Loginform'; // Importing Loginform component

function App({ isSignupPage }) { // Pass isSignupPage prop to determine whether it's signup or login page
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

      {isSignupPage ? <Signupform /> : <Loginform />} {/* Render Signupform or Loginform based on isSignupPage */}
    </Container>
  );
}

export default App;

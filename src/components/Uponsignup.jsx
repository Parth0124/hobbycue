import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Uponsignup({ cardTypes }) {
  const renderCard = (type) => {
    switch (type) {
      case 'people':
        return (
          <Card className="custom-card" style={{ padding: "20px", margin: "20px" }}>
            <Card.Body>
              <Card.Title><i className="bi bi-people-fill text-primary icon1"></i> People</Card.Title>
              <Card.Text>
                Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator.
              </Card.Text>
              <Button className="btn btn-light" style={{ color: '#8064A2', borderColor: '#8064A2' }}>Connect</Button>
            </Card.Body>
          </Card>
        );
      case 'place':
        return (
          <Card className="custom-card" style={{ padding: "20px", margin: "20px" }}>
            <Card.Body>
              <Card.Title><i className="bi bi-geo-alt-fill text-success icon2"></i> Place</Card.Title>
              <Card.Text>
                Find a class, school, playground, auditorium, studio, shop, or an event venue. Book a slot at venues that allow booking through hobbycue.
              </Card.Text>
              <Button className="btn btn-light" style={{ color: '#8064A2', borderColor: '#8064A2' }}>Meet up</Button>
            </Card.Body>
          </Card>
        );
      default:
        return null;
    }
  };

  // Filter cardTypes array to only include 'people' and 'place'
  const filteredCardTypes = cardTypes.filter(type => type === 'people' || type === 'place');

  return (
    <Row className="justify-content-center">
      {filteredCardTypes.map((type, index) => (
        <Col key={index} xs={12} md={6}>
          {renderCard(type)}
        </Col>
      ))}
    </Row>
  );
}

export default Uponsignup;

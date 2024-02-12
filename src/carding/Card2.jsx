import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Card2() {
   
  return (
    <Container className='p-5'>
      <Row>
        <Col xs={12}>
          <Card className="p-5">
            <Card.Body>
              <Card.Title><i className="bi bi-plus-circle-fill text-primary"></i> Add your own</Card.Title>
              <Card.Text className="text-dark" style={{ fontSize: "18px" }}>
                Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
              </Card.Text>
              
              <Button variant="outline-primary" className='border-primary text-primary'>
                Add new
              </Button>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Card2;

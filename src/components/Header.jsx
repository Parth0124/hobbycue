import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiSolidBell, BiSolidCart, BiSolidBookmark } from 'react-icons/bi';
import logo from '../images/icon.png';

// Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

function Header() {
  return (
    <div className="header-container">
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container fluid className="px-4">
          <Navbar.Brand className='logo' href="#"><img src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Form className="d-flex searcharea">
                <Form.Control type="search" placeholder="Search here" className="me-2" aria-label="Search" />
                <Button variant="outline-success searchbtn"><i className="bi bi-search"></i></Button>
              </Form>
            </Nav>
            <Nav className="icons">
              <NavDropdown title="Explore" id="explore-dropdown">
                <NavDropdown.Item href="#action1">People-Community</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Places-Venues</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Programs-Events</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Products-Store</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Blogs</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Hobbies" id="hobbies-dropdown">
                <NavDropdown.Item href="#action1">People-Community</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Places-Venues</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Programs-Events</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Products-Store</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Blogs</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2"><BiSolidBell /></Nav.Link>
              <Nav.Link href="#action2"><BiSolidBookmark /></Nav.Link>
              <Nav.Link className="home" href="#action1"><BiSolidCart /></Nav.Link>
            </Nav>
            <Button className='signinbtn' variant="outline-success" style={{ minWidth: '90px', paddingRight: '10px' }}>Sign in</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

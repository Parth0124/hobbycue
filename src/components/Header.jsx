import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Form className="d-flex searcharea">
                <Form.Control
                  type="search"
                  placeholder="Search here"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success searchbtn"><i className="bi bi-search"></i></Button>
              </Form>
              <div className={`icons ${window.innerWidth <= 576 ? 'justify-content-start' : ''}`}>
                <Nav.Link className="home" href="#action1"><i className="bi bi-compass-fill text"></i></Nav.Link><p>Explore</p>
                <NavDropdown title="" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3"></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="home" href="#action1"><i className="bi bi-star-fill"></i></Nav.Link><p>Hobbies</p>
                <NavDropdown title="" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3"></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="home" href="#action1"><i className="bi bi-bookmark-fill"></i></Nav.Link>
                <Nav.Link href="#action2"><i className="bi bi-bell-fill"></i></Nav.Link>
                <Nav.Link className="home" href="#action1"> <i className="bi bi-cart-fill"></i></Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
          <Button className='signinbtn' variant="outline-success" style={{ minWidth: '90px', paddingRight: '10px' }}>Sign in</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

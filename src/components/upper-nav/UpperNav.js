import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './UpperNav.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';

function UpperNav() {
  return (
    <div>
    <div className='upper-nav'>
      <Navbar bg="#fff" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
        </Nav>
        <Nav className="ml-auto"> {/* Add ml-auto to push this Nav to the right */}
            <Nav.Link as={Link} to="/" className='navbar1' style={{color:"blue"}}><LocalPhoneIcon />  0771234567</Nav.Link>
            <Nav.Link as={Link} to="/" className='navbar1' style={{color:"blue"}}><MarkunreadIcon />Mediplus@gmail.com</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    <hr></hr>
    </div>
  );
}

export default UpperNav;

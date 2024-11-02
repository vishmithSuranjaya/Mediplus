import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

const Navbar1 = () => {
  return (
    <div className='navbar'>
      <div className='navbar-img'>
        <Link to='/'><img src={logo} /></Link>
      </div>

      <div className='navbar-links'>
      <Navbar bg="#fff" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">Doctors</Nav.Link>
          <Nav.Link as={Link} to="#services">Services</Nav.Link>
          <Nav.Link as={Link} to="#blogs">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact US</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      </div>

      <div className='navbar-btn'>
        <button>Book Appointment</button>
      </div>
    </div>
  )
}

export default Navbar1

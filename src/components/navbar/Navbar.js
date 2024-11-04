import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';
import { useEffect } from 'react';
import AppointmentForm from '../../pages/AppointmentForm';

const Navbar1 = () => {

  // to navbar stay fixed when scrolling
  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    //to display appointment form
    const [isModelOpen, setIsModelOpen] = useState(false);

    const toggleModal = () => {
      setIsModelOpen(!isModelOpen);
    }
  
  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className='navbar-img'>
        <Link to='/'><img src={logo} /></Link>
      </div>

      <div className='navbar-links'>
      <Navbar bg="#fff" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
          <Nav.Link as={Link} to="#services">Services</Nav.Link>
          <Nav.Link as={Link} to="#blogs">Blogs</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact US</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      </div>

      <div className='navbar-btn'>
      <Link to="/form">
  Book Appointment
</Link>
      </div>
      {isModelOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <AppointmentForm onClose={toggleModal} /> {/* Pass close handler */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar1

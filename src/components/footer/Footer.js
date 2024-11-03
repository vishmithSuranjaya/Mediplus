import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
      <div className='aboutUs'>
        <h3>About Us</h3>
        <div className='hr1'></div>
        <p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
      </div>
      <div className='quickLinks'>
        <h3>Quick Links</h3>
        <div className='hr1'></div>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Our Cases</li>
        </ul>
      </div>
      <div className='newsLetter'>
        <h3>Quick Links</h3>
        <div className='hr1'></div>
        <p>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
        
      </div>
      </div>
      <div className='footer-end'>
        <p>© Copyright 2018 | All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer

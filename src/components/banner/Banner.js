import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='first-content'>
        <h1>We Provide <span style={{color:"blue"}}>Medical</span> Services That <br></br> You Can <span style={{color:"blue"}}>Trust</span></h1>
        <h6>Trustworthy medical services delivered with compassion and expertise for your health and well-being."</h6>
        <button className='banner-btn1'>Get Appointment</button>
        <button className='banner-btn2'>Contact Now</button>
      </div>
      <div className='second-content'>
        <div className='box'>
            <h4>Emergency Cases</h4>
            <p>"Prompt care for urgent health issues when seconds matter most."</p>
            <Link to='#learn_more'>Learn more <ArrowForwardIcon /> </Link>
        </div>

        <div className='box'>
        <h4>Doctors Timetable</h4>
            <p style={{paddingBottom:"1rem"}}>"View available appointment slots for our doctors' services."</p>
            <Link to='#learn_more'>Learn more <ArrowForwardIcon /> </Link>
        </div>

        <div className='box'>
            <h4>Opening Hours</h4>
            <ul>
            <li class="day">Monday - Friday <span style={{textAlign:"right"}}>8.00-20.00</span></li>
			<li class="day">Saturday <span>9.00-18.30</span></li>
			<li class="day">Monday - Thusday <span>9.00-15.00</span></li>
            </ul>
            <Link to='#learn_more'>Learn more <ArrowForwardIcon /> </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner

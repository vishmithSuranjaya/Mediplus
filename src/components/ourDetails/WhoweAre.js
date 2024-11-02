import React from 'react'
import './WhoweAre.css'
import VideoImg from '../../assets/video-bg.jpg'

const WhoweAre = () => {
  return (
    <div className='who-we-are'>
      <div className='first-content1'>
        <h1>Who We Are</h1>
        <div className='hr'></div>
        <p>"We are a dedicated medical center committed to providing exceptional healthcare services. Our experienced team prioritizes your well-being, offering compassionate care and advanced treatments tailored to meet your needs."</p>
        <p> Our skilled professionals provide compassionate, personalized care using the latest technology, ensuring that you and your family receive the best possible treatment."</p>
        <div className='points'>
            <ul>
                <li>Trusted Healthcare Provider</li>
                <li>Experienced Professionals</li>
                <li>Advanced Technology</li>
                <li>Family-Centered Services</li>
                <li>Community Focused</li>
            </ul>
        </div>
      </div>

      <div className='second-content1'>
        <img src={VideoImg} />
      </div>
    </div>
  )
}

export default WhoweAre

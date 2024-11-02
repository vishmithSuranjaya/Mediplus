import React from 'react'
import './Counts.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Counts = () => {
  return (
    <div className='overlay'>
    <div className='counts'>
      <div className='count-details'>
        <div className='count-img'>
            <HomeIcon fontSize="large" />
        </div>
        <div className='count-detail'>
        <h1>2560</h1>
        <h5>Hospital Rooms</h5>
        </div>
      </div>

      <div className='count-details'>
        <div className='count-img'>
            <PersonIcon fontSize="large" />
        </div>
        <div className='count-detail'>
        <h1>2560</h1>
        <h5>Hospital Rooms</h5>
        </div>
      </div>

      <div className='count-details'>
        <div className='count-img'>
            <SentimentSatisfiedAltIcon fontSize="large" />
        </div>
        <div className='count-detail'>
        <h1>2560</h1>
        <h5>Hospital Rooms</h5>
        </div>
      </div>

      <div className='count-details'>
        <div className='count-img'>
            <CalendarMonthIcon fontSize="large" />
        </div>
        <div className='count-detail'>
        <h1>2560</h1>
        <h5>Hospital Rooms</h5>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Counts

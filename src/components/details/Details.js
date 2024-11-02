import React from 'react'
import './Details.css';
import  sectionImage  from '../../assets/section-img.png'
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import VaccinesIcon from '@mui/icons-material/Vaccines';

const Details = () => {
  return (
    <div className='details'>
      <h1>We Are Always Ready to Help You & <br></br><span style={{textAlign:"center"}}>Your Family</span></h1>
      <img src={sectionImage} />
      <p>"We are always ready to help you and your family, providing compassionate care and support whenever you need it. Your health and well-being are our top priorities."</p>


      <div className='img-container'>
        <div className='imgCon-box'>
            <div className='imgCon-img'>
                <MinorCrashIcon fontSize="large" />
            </div>
            <h5>Emergency Help</h5>
            <p>"Immediate Assistance for Urgent Needs"</p>
        </div>

        <div className='imgCon-box'>
            <div className='imgCon-img'>
                <LocalPharmacyIcon fontSize="large" />
            </div>
            <h5>Enriched Pharmacy</h5>
            <p>"Your Trusted Source for Quality Medications"</p>
        </div>

        <div className='imgCon-box'>
            <div className='imgCon-img'>
                <VaccinesIcon fontSize="large" />
            </div>
            <h5>Medical Treatment</h5>
            <p>"Comprehensive Care for Your Health Needs"</p>
        </div>
      </div>
    </div>
  )
}

export default Details

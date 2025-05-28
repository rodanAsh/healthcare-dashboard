import React from 'react'
import './AnatomySection.css'
import { PiMagnifyingGlassPlus } from "react-icons/pi";
import anatomyImage from '../../assets/anatomy.webp';
import heart_icon from '../../assets/heart_icon.png'
import leg_icon from '../../assets/leg_icon.png'

const AnatomySection = () => {
  return (
    <div className='anatomy-section-wrapper'>
      <span className='search-icon'>
        <PiMagnifyingGlassPlus className='icon' />
      </span>
      
      <div className='image-wrapper'>
        <img className='anatomy-image' src={anatomyImage} alt="" />

        <div className='heart-label'>
        <img src={heart_icon} alt="" />
        <p>Healthy Heart</p>
      </div>
      <div className='leg-label'>
        <img src={leg_icon} alt="" />
        <p>Healthy Leg</p>
      </div>
      </div>
    </div>
  )
}

export default AnatomySection
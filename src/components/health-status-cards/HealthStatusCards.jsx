import React from 'react'
import './HealthStatusCards.css'
import { healthStatus } from '../../data/healthStatus'
import { IoIosArrowRoundForward } from "react-icons/io";

const HealthStatusCards = () => {
  return (
    <div className='health-status-wrapper'>
      {
        healthStatus.map((item,index) => (
          <div key={index} className='health-status-card'>
            <div>
              <img src={item.image} alt={item.part} />
              <p>{item.part}</p>
            </div>
            <p>{item.date}</p>
            <span className='progress-bar'><span className={`${item.fill}-bar`} /></span>  
          </div>
        ))
      }
      <p>Details <IoIosArrowRoundForward /></p>
    </div>
  )
}

export default HealthStatusCards
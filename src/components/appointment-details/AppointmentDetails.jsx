import React from 'react'
import './AppointmentDetails.css'
import { appointmentDetails } from '../../data/appointmentDetails'

const AppointmentDetails = () => {
  return (
    <div className='appointment-details-wrapper'>
        {
            appointmentDetails.map((data, index) => (
                <div key={index} className={`appointment-detail ${data.isActive === true ? 'active' : ''}`}>
                    <div>
                        <p>{data.appointment_genre}</p>
                        <img src={data.icon} alt="" />
                    </div>
                    <p>{data.appoinment_time}</p>
                    <h4>{data.doctor_name}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default AppointmentDetails
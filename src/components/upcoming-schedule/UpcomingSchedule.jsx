import React from 'react'
import './UpcomingSchedule.css'
import { upcomingAppointments } from '../../data/upcomingAppointment'

const UpcomingSchedule = () => {
  return (
    <div className='upcoming-schedule'>
        <h2>The Upcoming Schedule</h2>
        {
            upcomingAppointments.map((appointment,index) => (
                <div key={index} className='appointment-list'>
                    <h3>{appointment.day}</h3>
                    <div className='card-container'>
                        {
                            appointment.schedule.map((data, apptIndex) => (
                                <div key={apptIndex} className='appointment-card'>
                                    <div className='card-header'>
                                        <p>{data.label}</p>
                                        <img src={data.icon} alt="" />
                                    </div>
                                    <p>{data.timing}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default UpcomingSchedule
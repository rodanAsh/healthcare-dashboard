import React from 'react'
import './CalendarView.css'
import { calendarData } from '../../data/calendarData'

const CalendarView = () => {
  return (
    <div className='calendar-wrapper'>
        {
            calendarData.map((data, index) => (
                <div key={index} className='calendar-grid'>
                    <p>{data.day}</p>
                    <h3>{data.date}</h3>
                    <div className='time-wrapper'>
                        {
                            data.time.map((time, timeIndex) => (
                                <span key={timeIndex}>
                                    {time}
                                </span>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default CalendarView
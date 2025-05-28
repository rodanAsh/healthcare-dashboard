import React from 'react'
import './ActivityFeed.css'

const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const chartData = [
  [60, 30, 45],
  [50, 20, 65],
  [40, 55, 25],
  [70, 30, 50],
  [90, 45, 60],
  [20, 35, 40],
  [55, 25, 30],
];

const barColors = ["#dee4ed", "#13d8e9", "#6770ca"];

const ActivityFeed = () => {
  return (
    <div className='activity-wrapper'>
        <div className='chart-header'>
            <h3>Activity</h3>
            <p>3 appointment on this week</p>
        </div>

        <div className='chart-grid'>
          {
            chartData.map((data, index) => (
              <div key={index} className='chart-day'>
                <div className='bars-container'>
                  {
                    data.map((height, barIndex) => (
                      <div
                        key={barIndex}
                        className='chart-bar'
                        style={{
                          height: `${height}%`,
                          backgroundColor: barColors[barIndex]
                        }}
                      ></div>
                    ))
                  }
                </div>
                <span className='day-label'>{days[index]}</span>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default ActivityFeed
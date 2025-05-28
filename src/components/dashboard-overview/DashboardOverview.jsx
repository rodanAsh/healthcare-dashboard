import React from 'react'
import './DashboardOverview.css'
import AnatomySection from '../anatomy-section/AnatomySection'
import HealthStatusCards from '../health-status-cards/HealthStatusCards'

const DashboardOverview = () => {
  return (
    <div className='dashboard-overview-wrapper'>
      {/* Anatomy Section Component */}
      <AnatomySection />
      {/* Health Status cards component */}
      <HealthStatusCards />
    </div>
  )
}

export default DashboardOverview
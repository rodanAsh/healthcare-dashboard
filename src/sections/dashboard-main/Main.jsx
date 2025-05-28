import React from 'react'
import './Main.css'
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowLeftFill } from "react-icons/ri";
import { RiArrowRightFill } from "react-icons/ri";
import DashboardOverview from '../../components/dashboard-overview/DashboardOverview';
import ActivityFeed from '../../components/activity-feed/ActivityFeed';
import CalendarView from '../../components/calendar-view/CalendarView';
import AppointmentDetails from '../../components/appointment-details/AppointmentDetails';
import UpcomingSchedule from '../../components/upcoming-schedule/UpcomingSchedule';

const Main = () => {
  return (
    <div className='main-wrapper'>
      {/* ---------- Left main content ------------- */}
      <div className="left-main">
        <div className="main-title">
          <h2>Dashboard</h2>
          <span>This Week <IoIosArrowDown /></span>
        </div> 
        <DashboardOverview />
        <ActivityFeed />
      </div>
      {/* ---------- Right main content ------------ */}
      <div className='right-main'>
        <div className='calendar-header'>
          <h2>May 2025</h2>
          <div className='calendar-arrows'>
            <RiArrowLeftFill className='arrow-left' />
            <RiArrowRightFill className='arrow-right' />
          </div>
        </div>
        <CalendarView />
        <AppointmentDetails />
        <UpcomingSchedule />
      </div>
    </div>
  )
}

export default Main
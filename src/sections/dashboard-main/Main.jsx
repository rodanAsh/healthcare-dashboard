import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './Main.css'

const Main = () => {
  return (
    <div className='main-wrapper'>
      {/* ---------- Left main content ------------- */}
      <div className="left-main">
        <div className="main-title">
          <h2>Dashboard</h2>
          <span>This Week <IoIosArrowDown /></span>
        </div> 
      </div>
      {/* ---------- Right main content ------------ */}
      <div className='right-main'>

      </div>
    </div>
  )
}

export default Main
import React from 'react'
import { navLinks } from '../../data/navLinks.js'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
      <h3 className='sub-title'>General</h3>
      {
        navLinks.map((link,index) => {
          const Icon = link.icon;
          return (
            <div key={index} className='nav-link'>
              <Icon className='nav-icon' />
              <span className='nav-title'>{link.title}</span>
            </div>
          ) 
        })
      }
    </div>
  )
}

export default Sidebar
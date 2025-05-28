import React from 'react'
import { navLinks } from '../../data/navLinks.js'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
      {
        navLinks.map((navLink, index) => (
          <div key={index} className='nav-category'>
            <h3 className='sub-title'>{navLink.category}</h3>
            <div className='nav-link-container'>
              {
                navLink.links.map((link, linkIndex) => {
                  const Icon = link.icon;
                  return (
                    <div key={linkIndex} className='nav-link'>
                      <Icon className='nav-icon' />
                      <span className='nav-title'>{link.title}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar
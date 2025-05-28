import profile from '../../assets/profile_icon.png'
import './Header.css'
import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { HiBell } from "react-icons/hi";

const Header = () => {
  return (
    <div className='header'>

      <div className='header-main'>

        {/* logo */}
        <h2 className='title'>
          Health<span>care.</span>
        </h2>

        {/* search input */}
        <div className='search-input'>
          <span>
            <IoSearchOutline className="search-icon" />
            <input 
              type='text'
              placeholder='Search'
            />
          </span>
          <HiBell className='bell-icon' />
        </div>
      </div>
      
      {/* profile section */}

      <div className='profile'>
        <img src={profile} alt="" />
        <FaPlus className="plus-icon" />
      </div>
    </div>
  )
}

export default Header
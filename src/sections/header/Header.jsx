import profile from '../../assets/profile-icon.png'
import './Header.css'
import { FaBell, FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='header'>
      {/* Left side */}
      <div className="left">
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
          <FaBell className='bell-icon' />
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
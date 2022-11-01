import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';


const Header = () => {
  return (
    <div className='header'>
      <img className='header_logo'  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AAmazon_logo.svg&psig=AOvVaw1GMQ2BO3XBcUoQV7P5-PYH&ust=1667410591621000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjz29XCjfsCFQAAAAAdAAAAABAD" alt="amazon logo" />
      <div className='header_search'>
        <input className='header_Searchinput' type="text" />
        <SearchIcon className='header_searchIcon' />
      </div>
      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionL_One'>
            Hello Guest
          </span>
          <span className='header_optionL_Two'>
            Sign IN 
          </span>
        </div>
        <div className='header_option'>
        <span className='header_optionL_One'>
            Returns
          </span>
          <span className='header_optionL_Two'>
            Orders 
          </span>
        </div>
        <div className='header_option'>
        <span className='header_optionL_One'>
            Your
          </span>
          <span className='header_optionL_Two'>
            Prime 
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
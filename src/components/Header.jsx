import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


const Header = () => {
  return (
    <div className='header'>
      <img className='header_logo'  src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png" alt="amazon logo" />
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
        <div className='header_optionbasket'>
          <ShoppingBasketIcon />  
          <span className='header_optionL_Two header_basketcount'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header
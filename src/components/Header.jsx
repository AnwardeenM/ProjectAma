import React from 'react'

const Header = () => {
  return (
    <div>
      Header
      <img className='header_logo'  src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AAmazon_logo.svg&psig=AOvVaw1GMQ2BO3XBcUoQV7P5-PYH&ust=1667410591621000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPjz29XCjfsCFQAAAAAdAAAAABAD" alt="amazon logo" />
      <div className='header_search'>
        <input className='header_Searchinput' type="text" />
      </div>
      <div className='header_nav'>
        <div className='header_option'>
    Hello Signin
        </div>
        <div className='header_option'>
          
        </div>
        <div className='header_option'>
          
        </div>
      </div>
    </div>
  )
}

export default Header
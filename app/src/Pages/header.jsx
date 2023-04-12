import React from 'react';
import ComponyLogo from '../Images/Company_logo.png';

const Header = () => {
  return (
    <div className='header limit_width'>
      <img src={ComponyLogo} alt="404" />
      <div className="locations">
        <a href="#">Use Cases</a>
        <a href="#">About</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
      </div>
      <div className="register_but">
        <button className='login'>Login</button>
        <button className='signup'>Sign Up</button>
      </div>
    </div>
  )
}

export default Header
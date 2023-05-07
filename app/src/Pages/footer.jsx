import React from 'react';
import Logo from '../Images/Company_logo.png'

const Footer = () => {
  return (
    <div className='footer limit_width'>
        <div className="logo">
            <img src={Logo}/>
            <p>info@marico.co</p>
        </div>
        <div className="navigation">
          <a href="#">About</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Sign in</a>
        </div>
    </div>
  )
}

export default Footer
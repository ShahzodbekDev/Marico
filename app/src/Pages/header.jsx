import React from "react";
import ComponyLogo from "../Images/Company_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header limit_width">
      <Link to='/'><img src={ComponyLogo} alt="404" /></Link>
      <div className="locations">
        <Link to='/'>Home</Link>
        <a href="#">About</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
      </div>
      <div className="register_but">
        <button className="login">Login</button>
        <Link to='signup'><button className="signup">Sing Up</button></Link>
      </div>
    </div>
  );
};

export default Header;

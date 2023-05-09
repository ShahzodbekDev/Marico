import React from "react";
import Logo from "../../Images/Logo.png";
import Dot from "../../Images/Dot.png";

const Newstart = () => {
  return (
    <div className="new_start limit-width">
      <img className="logo" src={Logo} />
      <h1>Get Started Now</h1>
      <h3>Setup is easy and takes under 5 minutes.</h3>
      <button className="new_btn">Get Started Now</button>
      <p>
        <span>
          <img src={Dot} />
          1000+
        </span>
        &nbsp; creators have already started
      </p>
    </div>
  );
};

export default Newstart;

import React from "react";

const SignHeader = () => {
  return <div className="signheader limit_width">
    <h1>Sign up</h1>
    <p>Fill all field for create an account.</p>
    <div className="forms">
    <form>
      <div>
      <input className="userneme" type="text" placeholder="Username "/>
      <input className="email" type="email" placeholder="Email Address" />
      </div>
      
      <div>
      <input className="password" type="password" placeholder="Password"/>
     <button className="submit">SignUp</button>
      </div>
    </form>
    </div>
  </div>;
};

export default SignHeader;

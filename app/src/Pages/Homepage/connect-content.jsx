import React from "react";
import Screen from "../../Images/Screen.png";

const ConnectContent = () => {
  return (
    <div className="connect limit-width">
      <div className="connect_head">
        <span className="steps">STEP 1</span>
        <h1>Connect Your Content</h1>
        <p>
          Bring all of your content together and get a Homepage that
          automatically updates whenever you create anywhere online.
        </p>
        <button className="view_btn">View Avaliable Sources</button>
      </div>
      <div className="connect_bloc">
        <div className="home_page">
          <h4>Your Homepage</h4>
          <h1>Your Content.</h1>
          <h1>
            All in <span>One Spot</span>
          </h1>
          <p>1. Bring all of your content together into one homepage.</p>
          <p>2. Your page automatically updates whenever you create.</p>
          <div className="buttons">
            <button className="get_but">Get Started Now</button>
            <button className="view_but">View A Demo</button>
          </div>
        </div>
        <div className="screen">
          <img src={Screen} />
        </div>
      </div>
    </div>
  );
};

export default ConnectContent;

import React from "react";
import Mobile from '../Images/Mobile.png'

const ShareHompage = () => {
  return (
    <div className="sharehome limit_width">
      <div className="head_fonts">
        <span className="steps">STEP 2</span>
        <h1>Share Your Homepage</h1>
        <p>
          Share your Wavium homepage link with your followers, and we'll handle
          the rest.
        </p>
      </div>
      <div className="tou_blocs">
        <div className="onelink">
          <p>One Link</p>
          <h1>
            <span>ALL You Create.</span>
          </h1>
          <h1>One Link</h1>
          <img src={Mobile}/>
        </div>
        <div className="subcribers">
          <p>Collect Subscribers</p>
          <h1>
            <span>Emails. Phone #s.</span>
          </h1>
          <h1>All Yours.</h1>
        </div>
      </div>
    </div>
  );
};

export default ShareHompage;

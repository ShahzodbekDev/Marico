import React from "react";
import Screen from "../../Images/Screen (1).png";

const SendEmails = () => {
  return (
    <div className="sendemails limit_width">
      <div className="send_head">
        <span className="steps">STEP 3</span>
        <h1>Send Emails & Text Messages</h1>
        <p>
          No more going through a social platform. Reach and engage your
          audience directly over email and text massage.
        </p>
      </div>
      <div className="send_bloc">
        <div className="share">
          <h4>Create & Share</h4>
          <h1>Reach Your </h1>
          <h1>
            Audience <span>Directly.</span>
          </h1>
          <p>1.Embed content or create something new to share.</p>
          <p>2. Share content over email, text message or your homepage.</p>
          <div className="btn_bloc">
            <button className="get_btn">Get Started Now</button>
            <button className="view_btn">View A Demo</button>
          </div>
        </div>
        <div className="screenshot2">
          <img src={Screen} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SendEmails;

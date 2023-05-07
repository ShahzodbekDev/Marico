import React from "react";
import Dot from "../../Images/Dot.png";
import Smile from '../../Images/Smile_emoji.png'
import Heppy from '../../Images/Happy_emoji.png'
import Party from '../../Images/Party_emoji.png'
const Banner = () => {
  return (
    <div className="banner limit_width">
      <h1>Own your audience.</h1>
      <h1 className="gradien_trxt">So you don't lose them.</h1>

      <h4>Turn your audience into email and </h4>
      <h4>text message subscribers.</h4>
      <div className="but_bloc">
        <button className="one_but">Get Started Now</button>
        <button className="tou_but">View A Demo</button>
      </div>
      <p>
        <span>
          <img src={Dot} />
          1000+
        </span>&nbsp;
        creators have already started
      </p>
      <div className="why_creators ">
        <h1>Why Creators Love Marico</h1>
        <div className="why_types">
          <div className="why_type">
            <h4><img src={Smile} /> Reduced Anxiety</h4>
            <p>Never worry about losing your audience.</p>
          </div>
          <div className="why_type cent_type">
            <h4><img src={Heppy} /> Lower Workload</h4>
            <p>Just share one link. We'll handle the rest.</p>
          </div>
          <div className="why_type">
            <h4><img src={Party} /> More Time</h4>
            <p>Spend less time on marketing tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import Text from "../Images/Text_shape.png";
import Dot from "../Images/Dot.png";

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
    </div>
  );
};

export default Banner;

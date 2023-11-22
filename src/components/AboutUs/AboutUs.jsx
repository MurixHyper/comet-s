import React from 'react';
import './AboutUs.css';
import leftimg from '../../images/leftimg.png';
import rightimg from '../../images/rightimg.png';

const AboutUs = () => {
  return (
    <div>
      <div className="header">
        <h2>About Comet.S</h2>
      </div>
      <div className="container">
        <div className="text">
          <p>CometS is far from an unusual place, it does not look like a simple pub with a standard menu and fixed prices.</p>
        </div>
        <div className="image">
          <img src={rightimg} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="inage">
          <p> We have developed a special pricing system that will change in real time, which will surely surprise visitors and allow them to choose a drink to their liking.</p>
        </div>
        <div className="text">
          <img src={leftimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

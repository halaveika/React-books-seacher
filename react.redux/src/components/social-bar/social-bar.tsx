import React from 'react';
import './social-bar.scss';

class SocialBar extends React.Component {
  render() {
    return (
      <div className="social-bar">
        <a href="https://github.com/halaveika" target="_blank" rel="noreferrer">
          <div
            className="social-item"
            style={{
              backgroundImage: `url("./assets/images/github.svg")`,
            }}
          ></div>
        </a>
        <a href="https://www.facebook.com/aliaksandr.halaveika" target="_blank" rel="noreferrer">
          <div
            className="social-item"
            style={{
              backgroundImage: `url("./assets/images/facebook.svg")`,
            }}
          ></div>
        </a>
        <a
          href="https://www.linkedin.com/in/aliaksandr-halaveika-805a53191/"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="social-item"
            style={{
              backgroundImage: `url("./assets/images/linkedin.svg")`,
            }}
          ></div>
        </a>
        <a href="https://www.youtube.com/c/RollingScopesSchool" target="_blank" rel="noreferrer">
          <div
            className="social-item"
            style={{
              backgroundImage: `url("./assets/images/youtube.svg")`,
            }}
          ></div>
        </a>
      </div>
    );
  }
}

export default SocialBar;

import React from 'react';
import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer container">
        <div className="content">
          <span className="title">Rsschool React 2022Q1</span>
          <span className="copyright">COPYRIGHT © 2022</span>
          <span>
            <a href="https://github.com/halaveika" target="_blank" rel="noreferrer">
              HALAVEIKA ALIAKSANDR
            </a>
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;

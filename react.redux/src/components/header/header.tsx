import React from 'react';
import NavBar from '../nav-bar';
import './header.scss';

type HeaderProps = {
  title: string;
};

class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header className="header container">
        <div className="content">
          <span className="page-title">{this.props.title}</span>
          <NavBar></NavBar>
        </div>
      </header>
    );
  }
}

export default Header;

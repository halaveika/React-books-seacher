import React from 'react';
import Header from '../../components/header';
import SocialBar from '../../components/social-bar';
import { POSTER_URL } from '../../common/constants';
import './about-page.scss';

type AboutPageProps = {
  title: string;
};

class AboutPage extends React.Component<AboutPageProps> {
  render() {
    return (
      <>
        <Header title={this.props.title}></Header>
        <main className="main container">
          <div className="content">
            <img
              className="about-image"
              alt="programmer"
              src={`${POSTER_URL}Professional-Programmer.jpg`}
            />
            <SocialBar />
          </div>
        </main>
      </>
    );
  }
}

export default AboutPage;

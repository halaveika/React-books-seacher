import React from 'react';
import Header from '../../components/header';
import { POSTER_URL } from '../../common/constants';
import './not-found-page.scss';

type NotFoundPageProps = {
  title: string;
};

class NotFoundPage extends React.Component<NotFoundPageProps> {
  render() {
    return (
      <>
        <Header title={this.props.title}></Header>
        <div className="container">
          <div className="content">
            <img
              className="not-found-image"
              alt="page_not_found"
              src={`${POSTER_URL}error-404.png`}
            />
          </div>
        </div>
      </>
    );
  }
}

export default NotFoundPage;

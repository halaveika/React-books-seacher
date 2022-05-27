import React from 'react';
import './card.scss';
import { POSTER_URL } from '../../common/constants';
import RatingBar from '../rating-bar';

type CardProps = {
  id: string;
  title: string;
  author: string;
  vote_average: number;
  poster: string;
  overview: string;
  price: number;
};

type CardState = {
  hovered: boolean;
  active: boolean;
};

class Card extends React.Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      hovered: false,
      active: false,
    };
  }

  toggleHover = () =>
    this.setState((state) => ({ ...state, hovered: !state.hovered, active: false }));

  toggleActive = () => this.setState((state) => ({ ...state, active: true }));

  render() {
    const { title, author, vote_average, poster, overview, price } = this.props;
    return (
      <div
        className={`card${this.state.hovered ? '__hovered' : ''}`}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <div className={`overlay${this.state.active ? '__active' : ''}`} />
        <img
          className={`poster${this.state.active ? '__active' : ''}`}
          alt="Poster!"
          src={`${POSTER_URL}${poster}`}
        />
        {this.state.hovered && !this.state.active ? (
          <button className="more-btn" onClick={this.toggleActive}>
            overview
          </button>
        ) : (
          ''
        )}
        {this.state.active ? (
          <>
            <span className="overview">{overview}</span>
          </>
        ) : (
          <div className="card-details">
            <span className="card-title">{title}</span>
            <span className="card-author">{author}</span>
            <RatingBar vote_average={vote_average}></RatingBar>
            <span className="card-price">{'$ ' + price}</span>
          </div>
        )}
      </div>
    );
  }
}

export default Card;

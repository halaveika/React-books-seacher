import React from 'react';
import './card.scss';
import RatingBar from '../rating-bar';
import { VolumeInfoType } from '../../common/types/searchResponse';
import CardModal from '../card-modal';

type CardProps = {
  volumeInfo: VolumeInfoType;
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
    const {
      title,
      authors = [],
      averageRating,
      imageLinks = { smallThumbnail: '', thumbnail: '' },
      description,
      categories = [],
    } = this.props.volumeInfo;
    return (
      <div
        className={`card${this.state.hovered ? '__hovered' : ''}`}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        <CardModal volumeInfo={this.props.volumeInfo}>
          <div className={`overlay${this.state.active ? '__active' : ''}`} />
        </CardModal>
        <img
          className={`poster${this.state.active ? '__active' : ''}`}
          alt="Poster!"
          src={`${imageLinks.thumbnail}`}
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
            <span className="overview">{description}</span>
          </>
        ) : (
          <div className="card-details">
            <span className="card-title">{title}</span>
            <span className="card-author">{authors.join(', ')}</span>
            <RatingBar averageRating={averageRating}></RatingBar>
            <span className="card-categories">{categories.join(', ')}</span>
          </div>
        )}
      </div>
    );
  }
}

export default Card;

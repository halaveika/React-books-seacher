import React from 'react';
import './rating-bar.scss';

type RatingBarProps = {
  vote_average: number;
};

class RatingBar extends React.Component<RatingBarProps> {
  render() {
    return (
      <div className="rating-bar">
        {Array(Math.floor(this.props.vote_average))
          .fill(1)
          .map((e, i) => (
            <img className="star" key={i} src="assets/images/star.png" alt="superstar" />
          ))}
        <span>{this.props.vote_average}</span>
      </div>
    );
  }
}

export default RatingBar;

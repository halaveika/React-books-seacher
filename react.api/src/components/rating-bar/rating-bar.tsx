import React from 'react';
import './rating-bar.scss';

type RatingBarProps = {
  averageRating: number;
};

class RatingBar extends React.Component<RatingBarProps> {
  render() {
    return (
      <div className="rating-bar">
        <span>Rating: </span>
        {Array(Math.floor(this.props.averageRating || 0))
          .fill(1)
          .map((e, i) => (
            <img className="star" key={i} src="assets/images/star.png" alt="superstar" />
          ))}
      </div>
    );
  }
}

export default RatingBar;

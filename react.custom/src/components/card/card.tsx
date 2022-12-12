import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../../store/store';
import './card.scss';
import RatingBar from '../rating-bar';
import { setDetailsPage } from '../../store/actions/view-actions';

type CardProps = {
  authors: string[];
  averageRating: number;
  categories: string[];
  description: string;
  language: string;
  pageCount: number;
  printType: string;
  publishedDate: string;
  publisher: string;
  ratingsCount: number;
  subtitle: string;
  title: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
};

const Card = ({
  title,
  authors = [],
  averageRating,
  imageLinks = { smallThumbnail: '', thumbnail: '' },
  description,
  categories = [],
  language,
  pageCount,
  printType,
  publishedDate,
  publisher,
  ratingsCount,
  subtitle,
}: CardProps) => {
  const navigate = useNavigate();
  const { state, dispatch } = useStoreContext();
  const [interactive, setInteractive] = React.useState({ hovered: false, active: false });

  const detailsProps = {
    title,
    authors,
    averageRating,
    imageLinks,
    description,
    categories,
    language,
    pageCount,
    printType,
    publishedDate,
    publisher,
    ratingsCount,
    subtitle,
  };

  const toggleHover = () =>
    setInteractive((state) => ({ ...state, hovered: !state.hovered, active: false }));

  const toggleActive = () => setInteractive((state) => ({ ...state, active: true }));

  const getDetails = () => {
    dispatch(setDetailsPage(detailsProps));
    navigate('../details', { replace: true });
  };

  return (
    <div
      className={`card${interactive.hovered ? '__hovered' : ''}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className={`overlay${interactive.active ? '__active' : ''}`} onClick={getDetails} />
      <img
        className={`poster${interactive.active ? '__active' : ''}`}
        alt="Poster!"
        src={`${imageLinks.thumbnail}`}
      />
      {interactive.hovered && !interactive.active ? (
        <button className="more-btn" onClick={toggleActive}>
          overview
        </button>
      ) : (
        ''
      )}
      {interactive.active ? (
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
};

export default Card;

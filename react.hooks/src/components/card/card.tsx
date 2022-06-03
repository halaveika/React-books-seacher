import React from 'react';
import './card.scss';
import RatingBar from '../rating-bar';
import CardModal from '../card-modal';

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

const Card = (props: CardProps) => {
  const [state, setState] = React.useState({ hovered: false, active: false });

  const toggleHover = () =>
    setState((state) => ({ ...state, hovered: !state.hovered, active: false }));

  const toggleActive = () => setState((state) => ({ ...state, active: true }));

  const {
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
  } = props;

  return (
    <div
      className={`card${state.hovered ? '__hovered' : ''}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <CardModal
        authors={authors}
        averageRating={averageRating}
        categories={categories}
        description={description}
        language={language}
        pageCount={pageCount}
        publishedDate={publishedDate}
        publisher={publisher}
        ratingsCount={ratingsCount}
        subtitle={subtitle}
        title={title}
        imageLinks={imageLinks}
        printType={printType}
      >
        <div className={`overlay${state.active ? '__active' : ''}`} />
      </CardModal>
      <img
        className={`poster${state.active ? '__active' : ''}`}
        alt="Poster!"
        src={`${imageLinks.thumbnail}`}
      />
      {state.hovered && !state.active ? (
        <button className="more-btn" onClick={toggleActive}>
          overview
        </button>
      ) : (
        ''
      )}
      {state.active ? (
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

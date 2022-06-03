import React from 'react';
import './card-modal.scss';

type CardModalProps = {
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
  children: JSX.Element;
};

const CardModal = (props: CardModalProps) => {
  const [showed, setShowed] = React.useState(false);

  const showModal = () => setShowed(true);

  const hideModal = () => setShowed(false);

  const {
    authors = [],
    averageRating,
    categories = [],
    description,
    language,
    pageCount,
    printType,
    publishedDate,
    publisher,
    ratingsCount,
    subtitle,
    title,
    imageLinks = { smallThumbnail: '', thumbnail: '' },
  } = props;
  return (
    <>
      <div className={`modal${showed ? ' display-block' : ' display-none'}`}>
        <section className="modal-main">
          <div className="close-btn" onClick={hideModal}></div>
          <img className="modal-image" alt="Poster!" src={`${imageLinks.thumbnail}`} />
          <span className="modal-title">{title}</span>
          <div className="modal-item">
            <span className="item-title">Subtitle: </span>
            <span className="modal-info">{subtitle}</span>
          </div>
          <div className="modal-item">
            <span className="item-title">Categories: </span>
            <span className="modal-info">{categories.join(', ')}</span>
          </div>
          <div className="modal-item">
            <span className="item-title">Authors: </span>
            <span className="modal-info">{authors.join(', ')}</span>
          </div>
          <div className="modal-item">
            <span className="item-title">Description: </span>
            <span className="modal-info">{description}</span>
          </div>
          <div className="modal-item">
            <span className="item-title">Average rating: </span>
            <span className="modal-info">{averageRating}</span>
          </div>
          <div className="modal-item">
            <span className="item-title">Ratings count: </span>
            <span className="modal-info">{ratingsCount}</span>
          </div>
          <div className="modal-item">
            <span className="item-title">Language: </span>
            <span className="modal-info">{language}</span>
          </div>
          <div className="modal-item">
            <span className="item-title">Page count: </span>
            <span className="modal-info">{pageCount}</span>
          </div>
          <div className="modal-item">
            <span className="item-title">Print type: </span>
            <span className="modal-info">{printType}</span>
          </div>
          <div className="modal-item">
            <span className="item-title">Published date: </span>
            <span className="modal-info">{publishedDate}</span>
          </div>
          <div className="modal-item">
            <span className="item-title">Publisher: </span>
            <span className="modal-info">{publisher}</span>
          </div>
        </section>
      </div>
      {React.cloneElement(props.children, { onClick: showModal })}
    </>
  );
};

export default CardModal;

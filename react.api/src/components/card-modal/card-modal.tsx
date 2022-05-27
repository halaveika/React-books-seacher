import React from 'react';
import './card-modal.scss';
import { VolumeInfoType } from '../../common/types/searchResponse';

type CardModalProps = {
  volumeInfo: VolumeInfoType;
  children: JSX.Element;
};

type CardModalState = {
  show: boolean;
};

class CardModal extends React.Component<CardModalProps, CardModalState> {
  state: CardModalState = {
    show: false,
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
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
    } = this.props.volumeInfo;
    return (
      <>
        <div className={`modal${this.state.show ? ' display-block' : ' display-none'}`}>
          <section className="modal-main">
            <div className="close-btn" onClick={this.hideModal}></div>
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
        {React.cloneElement(this.props.children, { onClick: this.showModal.bind(this) })}
      </>
    );
  }
}

export default CardModal;

import React from 'react';
import Header from '../../components/header';
import './details-page.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import { setDetailsPage } from '../../store/features/view/viewSlice';
import DetailsType from '../../common/types/details';

type DetailsPageProps = {
  title: string;
};

const DetailsPage = (props: DetailsPageProps): JSX.Element => {
  const dispatch = useDispatch();
  const details = useSelector((state: RootState) => state.view.details);
  const {
    authors,
    averageRating,
    categories,
    description,
    language,
    pageCount,
    printType,
    publishedDate,
    publisher,
    ratingsCount,
    subtitle,
    title,
    imageLinks,
  } = details as DetailsType;
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!details) {
      navigate('/', { replace: true });
    }
  }, []);

  const toCards = () => {
    dispatch(setDetailsPage(null));
    navigate('/', { replace: true });
  };
  return (
    <>
      <Header title={props.title}></Header>
      <main className="details container">
        <section className="details-main">
          <img className="details-image" alt="Poster!" src={`${imageLinks.thumbnail}`} />
          <span className="details-title">{title}</span>
          <div
            className="back-btn"
            style={{
              backgroundImage: `url("./assets/images/back.png")`,
            }}
            onClick={toCards}
          ></div>
          <div className="details-item">
            <span className="item-title">Subtitle: </span>
            <span className="details-info">{subtitle}</span>
          </div>
          <div className="details-item">
            <span className="item-title">Categories: </span>
            <span className="details-info">{categories.join(', ')}</span>
          </div>
          <div className="details-item">
            <span className="item-title">Authors: </span>
            <span className="details-info">{authors.join(', ')}</span>
          </div>
          <div className="details-item">
            <span className="item-title">Description: </span>
            <span className="details-info">{description}</span>
          </div>
          <div className="details-item">
            <span className="item-title">Average rating: </span>
            <span className="details-info">{averageRating}</span>
          </div>
          <div className="details-item">
            <span className="item-title">Ratings count: </span>
            <span className="details-info">{ratingsCount}</span>
          </div>
          <div className="details-item">
            <span className="item-title">Language: </span>
            <span className="details-info">{language}</span>
          </div>
          <div className="details-item">
            <span className="item-title">Page count: </span>
            <span className="details-info">{pageCount}</span>
          </div>
          <div className="details-item">
            <span className="item-title">Print type: </span>
            <span className="details-info">{printType}</span>
          </div>
          <div className="details-item">
            <span className="item-title">Published date: </span>
            <span className="details-info">{publishedDate}</span>
          </div>
          <div className="details-item">
            <span className="item-title">Publisher: </span>
            <span className="details-info">{publisher}</span>
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailsPage;

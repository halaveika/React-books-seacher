import React from 'react';
import Card from '../card/card';
import './card-list.scss';
import CardType from '../../common/types/card';

type CardListProps = {
  cards: CardType[];
};

class CardList extends React.PureComponent<CardListProps> {
  renderCards = (cards: CardType[]) => {
    return cards.map((e) => (
      <Card
        key={e.id}
        authors={e.authors}
        averageRating={e.averageRating}
        categories={e.categories}
        description={e.description}
        language={e.language}
        pageCount={e.pageCount}
        publishedDate={e.publishedDate}
        publisher={e.publisher}
        ratingsCount={e.ratingsCount}
        subtitle={e.subtitle}
        title={e.title}
        imageLinks={e.imageLinks}
        printType={e.printType}
      ></Card>
    ));
  };

  render() {
    return <div className="card-list">{this.renderCards(this.props.cards)}</div>;
  }
}

export default CardList;

import React from 'react';
import Card from '../card/card';
import { mockCardArr } from '../../common/mocks/cardArr';
import './card-list.scss';

type CardListProps = {
  searchValue: string;
};

type CardProps = {
  id: string;
  title: string;
  author: string;
  vote_average: number;
  poster: string;
  overview: string;
  price: number;
};

class CardList extends React.Component<CardListProps> {
  renderCards = (cards: CardProps[]) =>
    cards
      .filter(
        (e) =>
          this.props.searchValue === '' ||
          e.title.slice(0, this.props.searchValue.length).toLowerCase() ===
            this.props.searchValue.toLowerCase()
      )
      .map((e) => <Card key={e.id} {...e}></Card>);

  render() {
    return <div className="card-list">{this.renderCards(mockCardArr)}</div>;
  }
}

export default CardList;

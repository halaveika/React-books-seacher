import React from 'react';
import Card from '../card/card';
import './card-list.scss';
import { itemsType } from '../../common/types/searchResponse';

type CardListProps = {
  fetchedData: itemsType[];
};

class CardList extends React.PureComponent<CardListProps> {
  renderCards = (cards: itemsType[]) => {
    return cards.map((e) => <Card key={e.id} volumeInfo={e.volumeInfo}></Card>);
  };

  render() {
    return <div className="card-list">{this.renderCards(this.props.fetchedData)}</div>;
  }
}

export default CardList;

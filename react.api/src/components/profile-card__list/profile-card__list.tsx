import React from 'react';
import ProfileCardType from '../../common/types/profile-card';
import './profile-card__list.scss';
import ProfileCard from '../profile-card/profile-card';

type ProfileCardListProps = {
  cards: ProfileCardType[];
};

class ProfileCardList extends React.Component<ProfileCardListProps> {
  renderCards = (cards: ProfileCardType[]) =>
    cards.map((e) => <ProfileCard key={e.id} {...e}></ProfileCard>);

  render() {
    return <div className="profile-card__list">{this.renderCards(this.props.cards)}</div>;
  }
}

export default ProfileCardList;

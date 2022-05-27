import React from 'react';
import Header from '../../components/header';
import './profile-page.scss';
import ProfileForm from '../../components/profile-form';
import { FORM_CARDS } from '../../common/constants';
import ProfileCardType from '../../common/types/profile-card';
import ProfileCardList from '../../components/profile-card__list';

type ProfilePageProps = {
  title: string;
};

type ProfilePageState = {
  cards: ProfileCardType[];
};

class ProfilePage extends React.Component<ProfilePageProps, ProfilePageState> {
  state: ProfilePageState = {
    cards: [],
  };

  addCard = (card: ProfileCardType) =>
    this.setState((prevState) => ({ cards: [...prevState.cards, card] }));

  componentDidMount() {
    const cards = localStorage.getItem(FORM_CARDS);
    if (cards) {
      this.setState((prevState) => ({ ...prevState, cards: JSON.parse(cards) }));
    }
  }

  componentWillUnmount() {
    localStorage.setItem(FORM_CARDS, JSON.stringify(this.state.cards));
  }

  render() {
    return (
      <>
        <Header title={this.props.title}></Header>
        <main className="main container">
          <div className="content">
            <ProfileForm addCard={this.addCard}></ProfileForm>
            <ProfileCardList cards={this.state.cards}></ProfileCardList>
          </div>
        </main>
      </>
    );
  }
}

export default ProfilePage;

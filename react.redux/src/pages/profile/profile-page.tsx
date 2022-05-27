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

const ProfilePage = (props: ProfilePageProps): JSX.Element => {
  const [cards, setCards] = React.useState<ProfileCardType[]>([]);

  React.useEffect(() => {
    const newCards = JSON.parse(localStorage.getItem(FORM_CARDS)!);
    if (newCards) {
      setCards(newCards);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(FORM_CARDS, JSON.stringify(cards));
  }, [cards]);

  const addCard = (card: ProfileCardType) => {
    setCards((prevState) => [...prevState, card]);
  };

  return (
    <>
      <Header title={props.title}></Header>
      <main className="main container">
        <div className="content">
          <ProfileForm addCard={addCard}></ProfileForm>
          <ProfileCardList cards={cards}></ProfileCardList>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;

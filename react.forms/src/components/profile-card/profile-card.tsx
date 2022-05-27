import React from 'react';
import './profile-card.scss';
import ProfileCardType from '../../common/types/profile-card';

class ProfileCard extends React.Component<ProfileCardType> {
  render() {
    const { firstname, lastname, zipcode, birthday, gender, avatar, gifts, city } = this.props;
    return (
      <div className="card-profile">
        <img className="avatar" alt="avatar!" src={avatar} />
        <div className="card-details">
          <span className="card-profile__name">{`${firstname} ${lastname}`}</span>
          <span>
            <i>{'birthday: '}</i>
            {birthday}
          </span>
          <span>
            <i>{'adress: '}</i>
            {`${zipcode} ${city}`}
          </span>
          <span>
            <i>{'gender: '}</i>
            {gender}
          </span>
          <span>
            <i>{'gifts: '}</i>
            {gifts.join(', ')}
          </span>
        </div>
      </div>
    );
  }
}

export default ProfileCard;

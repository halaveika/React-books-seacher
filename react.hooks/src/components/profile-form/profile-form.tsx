import React from 'react';
import { v4 as uuid } from 'uuid';
import ProfileCardType from '../../common/types/profile-card';
import Switcher from '../switcher';
import { useForm, SubmitHandler, NestedValue } from 'react-hook-form';
import './profile-form.scss';

const additionalGifts = ['badge', 'calendar', 'cup', 'pencil'];
const cities = ['Minsk', 'Brest', 'Grodno', 'Gomel', 'Vitebsk', 'Mogilev'];

type ProfileFormProps = {
  addCard: (card: ProfileCardType) => void;
};

interface Profile {
  firstname: string;
  lastname: string;
  zipcode: string;
  birthday: string;
  gender: boolean;
  avatar: FileList | string;
  city: string;
  gifts: string[];
}

const initialValue = {
  firstname: '',
  lastname: '',
  zipcode: '',
  birthday: '',
  gender: false,
  avatar: '',
  city: '',
  gifts: [],
};

const ProfileForm = (props: ProfileFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitted, submitCount },
  } = useForm<Profile>({
    defaultValues: initialValue,
  });
  const firstnameInput = register('firstname', {
    required: true,
    minLength: { value: 3, message: 'Too short!' },
    maxLength: { value: 20, message: 'Too long!' },
    pattern: {
      value: /^[a-z ,.'-]+$/i,
      message: 'Invalid first name',
    },
  });
  const lastnameInput = register('lastname', {
    required: true,
    minLength: { value: 3, message: 'Too short!' },
    maxLength: { value: 20, message: 'Too long!' },
    pattern: {
      value: /^[a-z ,.'-]+$/i,
      message: 'Invalid last name',
    },
  });
  const zipcodeInput = register('zipcode', {
    required: true,
    minLength: { value: 5, message: 'Too short!' },
    maxLength: { value: 5, message: 'Too long!' },
    pattern: {
      value: /^[0-9]+$/i,
      message: 'Invalid zipcode',
    },
  });
  const birthdayDateInput = register('birthday', {
    required: true,
  });
  const genderSwitcher = register('gender', {});
  const avatarInput = register('avatar', {
    required: true,
  });
  const citySelect = register('city', {
    required: true,
  });
  const gifts = register('gifts', {});

  const onSubmit = async (data: Profile) => {
    console.log(data);
    const { firstname, lastname, zipcode, birthday, gender, avatar, city, gifts } = data;
    const result = {
      id: uuid(),
      firstname,
      lastname,
      zipcode,
      birthday,
      gender: gender ? 'male' : 'female',
      avatar: await getBase64(avatar[0] as File),
      city,
      gifts,
    };
    reset();
    alert('card has submited');
    props.addCard(result);
  };

  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="profile-item">
        <span className="profile-item__title">Firstname</span>
        <div className="input-container">
          <input type="text" {...firstnameInput} id="firstname"></input>
          <label className="label-validation" htmlFor="firstname">
            {errors.firstname?.message}
          </label>
        </div>
      </div>
      <div className="profile-item">
        <span className="profile-item__title">Lastname</span>
        <div className="input-container">
          <input type="text" {...lastnameInput} id="lastname"></input>
          <label className="label-validation" htmlFor="lastname">
            {errors.lastname?.message}
          </label>
        </div>
      </div>
      <div className="profile-item">
        <span className="profile-item__title">Zipcode</span>
        <div className="input-container">
          <input type="number" {...zipcodeInput} id="zipcode"></input>
          <label className="label-validation" htmlFor="zipcode">
            {errors.zipcode?.message}
          </label>
        </div>
      </div>
      <div className="profile-item">
        <span className="profile-item__title">Birthday date</span>
        <div className="input-container">
          <input type="date" {...birthdayDateInput} id="birthday"></input>
          <label className="label-validation" htmlFor="birthday">
            {errors.birthday?.message}
          </label>
        </div>
      </div>
      <div className="profile-item">
        <span className="profile-item__title">Choose your city:</span>
        <div className="input-container">
          <select id="city" {...citySelect}>
            <option value="">--Please choose a city--</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <label className="label-validation" htmlFor="city">
            {errors.city?.message}
          </label>
        </div>
      </div>
      <div className="profile-item">
        <span className="profile-item__title">Gender</span>
        <Switcher refProp={genderSwitcher} id="gender"></Switcher>
      </div>
      <div className="profile-item">
        <span className="profile-item__title">Avatar</span>
        <div className="input-container">
          <input type="file" {...avatarInput} id="avatar" accept="image/*"></input>
          <label className="label-validation" htmlFor="avatar">
            {errors.avatar?.message}
          </label>
        </div>
      </div>
      <fieldset className="gift-checklist">
        <legend>Choose your an additional gift</legend>
        {additionalGifts.map((e) => (
          <div key={e}>
            <label htmlFor={e}>{e}</label>
            <input type="checkbox" value={e} {...gifts} id={e}></input>
          </div>
        ))}
      </fieldset>
      <button
        className="submit-btn"
        type="submit"
        disabled={
          (!isDirty && !isSubmitted) ||
          (isDirty && !isValid && isSubmitted) ||
          (!!submitCount && !isValid)
        }
      >
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;

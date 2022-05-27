import React from 'react';
import { v4 as uuid } from 'uuid';
import ProfileCardType from '../../common/types/profile-card';
import Switcher from '../switcher';
import './profile-form.scss';

const additionalGifts = ['badge', 'calendar', 'cup', 'pencil'];
const cities = ['Minsk', 'Brest', 'Grodno', 'Gomel', 'Vitebsk', 'Mogilev'];
const nameRegexp = new RegExp(/^[a-zA-Z]{2,}/);
type refArr = {
  [key: string]: React.RefObject<HTMLInputElement>;
};

type ProfileFormProps = {
  addCard: (card: ProfileCardType) => void;
};

type ProfileFormErrorsState = {
  firstname: string;
  lastname: string;
  zipcode: string;
  birthdayDate: string;
  avatar: string;
  city: string;
};

const ProfileForm = (props: ProfileFormProps) => {
  const [errors, setErrors] = React.useState<ProfileFormErrorsState>({
    firstname: '',
    lastname: '',
    zipcode: '',
    birthdayDate: '',
    avatar: '',
    city: '',
  });
  const [isActive, setActive] = React.useState(true);
  const firstnameInput = React.createRef<HTMLInputElement>();
  const lastnameInput = React.createRef<HTMLInputElement>();
  const zipcodeInput = React.createRef<HTMLInputElement>();
  const birthdayDateInput = React.createRef<HTMLInputElement>();
  const genderSwitcher = React.createRef<HTMLInputElement>();
  const avatarInput = React.createRef<HTMLInputElement>();
  const citySelect = React.createRef<HTMLSelectElement>();
  const refGiftsArrFn = (): refArr =>
    additionalGifts.reduce<refArr>(
      (acc, value) => ({ ...acc, ...{ [value]: React.createRef<HTMLInputElement>() } }),
      {}
    );
  const refGiftsArr = refGiftsArrFn();
  const submitFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const firstname = validateFirstnameAndGetValue(firstnameInput.current!);
    const lastname = validateLastnameAndGetValue(lastnameInput.current!);
    const zipcode = validateZipcodeAndGetValue(zipcodeInput.current!);
    const birthday = validateBirthdayAndGetValue(birthdayDateInput.current!);
    const city = validateCityAndGetValue(citySelect.current!);
    const avatar = await validateFileAndGetValue(avatarInput.current!);
    const gender = genderSwitcher.current?.checked ? 'male' : 'female';
    const gifts = Object.entries(refGiftsArr)
      .filter((e) => e[1].current?.checked)
      .map((e) => e[0]);
    if (!checkErrors()) {
      const result = {
        id: uuid(),
        firstname: firstname!,
        lastname: lastname!,
        zipcode: zipcode!,
        birthday: birthday!,
        gender,
        avatar: avatar!,
        city: city!,
        gifts,
      };
      clear();
      alert('card has submited');
      props.addCard(result);
    }
  };

  const validateFirstnameAndGetValue = (name: HTMLInputElement) =>
    nameRegexp.test(name.value)
      ? name.value
      : setErrors((prevState) => ({
          ...prevState,
          firstname: 'minimum 2 ENG alphaphit simbols',
        }));
  const validateLastnameAndGetValue = (name: HTMLInputElement) =>
    nameRegexp.test(name.value)
      ? name.value
      : setErrors((prevState) => ({
          ...prevState,
          lastname: 'minimum 2 ENG alphaphit simbols',
        }));
  const validateZipcodeAndGetValue = (zipcode: HTMLInputElement) =>
    /[0-9]{5,}/.test(zipcode.value)
      ? zipcode.value
      : setErrors((prevState) => ({
          ...prevState,
          zipcode: 'zipcode have 5 digits',
        }));
  const validateBirthdayAndGetValue = (data: HTMLInputElement) =>
    data.value
      ? data.value
      : setErrors((prevState) => ({
          ...prevState,
          birthdayDate: 'birthday not chosen',
        }));
  const validateCityAndGetValue = (city: HTMLSelectElement) =>
    city.value
      ? city.value
      : setErrors((prevState) => ({
          ...prevState,
          city: 'city not chosen',
        }));
  const validateFileAndGetValue = (file: HTMLInputElement) => {
    console.log(file.files);
    return file.files!.length > 0
      ? getBase64(file.files![0])
      : setErrors((prevState) => ({
          ...prevState,
          avatar: 'no file upload',
        }));
  };

  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const clear = () => {
    firstnameInput.current!.value = '';
    lastnameInput.current!.value = '';
    zipcodeInput.current!.value = '';
    birthdayDateInput.current!.value = '';
    genderSwitcher.current!.checked = false;
    avatarInput.current!.value = '';
    citySelect.current!.value = '';
    Object.values(refGiftsArr).forEach((e) => (e.current!.checked = false));
    setErrors({
      firstname: '',
      lastname: '',
      zipcode: '',
      birthdayDate: '',
      avatar: '',
      city: '',
    });
    setActive(true);
  };

  const checkErrors = () =>
    Object.values(errors).filter((e) => e !== '').length > 0 ? true : false;

  const changeInput = (
    ref: React.RefObject<HTMLInputElement> | React.RefObject<HTMLSelectElement>
  ) => {
    const id = ref.current?.id;
    setErrors((prevState) => ({
      ...prevState,
      [`${id}`]: '',
    }));
  };

  return (
    <form className="profile-form" onSubmit={submitFormHandler}>
      <div className="profile-item">
        <span className="profile-item__title">Firstname</span>
        <div className="input-container">
          <input
            type="text"
            ref={firstnameInput}
            id="firstname"
            onChange={() => changeInput(firstnameInput)}
            required
          ></input>
          <label className="label-validation" htmlFor="firstname">
            {errors.firstname}
          </label>
        </div>
      </div>
      <div className="profile-item">
        <span className="profile-item__title">Lastname</span>
        <div className="input-container">
          <input
            type="text"
            ref={lastnameInput}
            id="lastname"
            onChange={() => changeInput(lastnameInput)}
            required
          ></input>
          <label className="label-validation" htmlFor="lastname">
            {errors.lastname}
          </label>
        </div>
      </div>
      <div className="profile-item">
        <span className="profile-item__title">Zipcode</span>
        <div className="input-container">
          <input
            type="number"
            ref={zipcodeInput}
            id="zipcode"
            onChange={() => changeInput(zipcodeInput)}
            required
          ></input>
          <label className="label-validation" htmlFor="zipcode">
            {errors.zipcode}
          </label>
        </div>
      </div>
      <div className="profile-item">
        <span className="profile-item__title">Birthday date</span>
        <div className="input-container">
          <input
            type="date"
            ref={birthdayDateInput}
            id="birthdayDate"
            onChange={() => changeInput(birthdayDateInput)}
            required
          ></input>
          <label className="label-validation" htmlFor="birthdayDate">
            {errors.birthdayDate}
          </label>
        </div>
      </div>
      <div className="profile-item">
        <span className="profile-item__title">Choose your city:</span>
        <div className="input-container">
          <select
            name="city"
            id="city"
            ref={citySelect}
            onChange={() => changeInput(citySelect)}
            required
          >
            <option value="">--Please choose a city--</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <label className="label-validation" htmlFor="city">
            {errors.city}
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
          <input
            type="file"
            ref={avatarInput}
            id="avatar"
            accept="image/*"
            onChange={() => changeInput(avatarInput)}
            required
          ></input>
          <label className="label-validation" htmlFor="avatar">
            {errors.avatar}
          </label>
        </div>
      </div>
      <fieldset className="gift-checklist">
        <legend>Choose your an additional gift</legend>
        {Object.entries(refGiftsArr).map((e) => (
          <div key={e[0]}>
            <label htmlFor={e[0]}>{e[0]}</label>
            <input type="checkbox" ref={e[1]} id={e[0]}></input>
          </div>
        ))}
      </fieldset>
      <button className="submit-btn" type="submit" disabled={!isActive}>
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;

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

type ProfileFormState = {
  errors: {
    firstname: string;
    lastname: string;
    zipcode: string;
    birthdayDate: string;
    avatar: string;
    city: string;
  };
  submitActive: boolean;
};

class ProfileForm extends React.Component<ProfileFormProps, ProfileFormState> {
  constructor(props: ProfileFormProps) {
    super(props);
    this.state = {
      errors: {
        firstname: '',
        lastname: '',
        zipcode: '',
        birthdayDate: '',
        avatar: '',
        city: '',
      },
      submitActive: true,
    };
  }

  firstnameInput = React.createRef<HTMLInputElement>();
  lastnameInput = React.createRef<HTMLInputElement>();
  zipcodeInput = React.createRef<HTMLInputElement>();
  birthdayDateInput = React.createRef<HTMLInputElement>();
  genderSwitcher = React.createRef<HTMLInputElement>();
  avatarInput = React.createRef<HTMLInputElement>();
  citySelect = React.createRef<HTMLSelectElement>();
  refGiftsArrFn = (): refArr =>
    additionalGifts.reduce<refArr>(
      (acc, value) => ({ ...acc, ...{ [value]: React.createRef<HTMLInputElement>() } }),
      {}
    );
  refGiftsArr = this.refGiftsArrFn();

  submitFormHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const firstname = this.validateFirstnameAndGetValue(this.firstnameInput.current!);
    const lastname = this.validateLastnameAndGetValue(this.lastnameInput.current!);
    const zipcode = this.validateZipcodeAndGetValue(this.zipcodeInput.current!);
    const birthday = this.validateBirthdayAndGetValue(this.birthdayDateInput.current!);
    const city = this.validateCityAndGetValue(this.citySelect.current!);
    const avatar = await this.validateFileAndGetValue(this.avatarInput.current!);
    const gender = this.genderSwitcher.current?.checked ? 'male' : 'female';
    const gifts = Object.entries(this.refGiftsArr)
      .filter((e) => e[1].current?.checked)
      .map((e) => e[0]);
    console.log(this.state);
    if (!this.checkErrors()) {
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
      this.props.addCard(result);
      this.clear();
      alert('card has submited');
    }
  };

  validateFirstnameAndGetValue = (name: HTMLInputElement) =>
    nameRegexp.test(name.value)
      ? name.value
      : this.setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            firstname: 'minimum 2 ENG alphaphit simbols',
          },
        }));
  validateLastnameAndGetValue = (name: HTMLInputElement) =>
    nameRegexp.test(name.value)
      ? name.value
      : this.setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            lastname: 'minimum 2 ENG alphaphit simbols',
          },
        }));
  validateZipcodeAndGetValue = (zipcode: HTMLInputElement) =>
    /[0-9]{5,}/.test(zipcode.value)
      ? zipcode.value
      : this.setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            zipcode: 'zipcode have 5 digits',
          },
        }));
  validateBirthdayAndGetValue = (data: HTMLInputElement) =>
    data.value
      ? data.value
      : this.setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            birthdayDate: 'birthday not chosen',
          },
        }));
  validateCityAndGetValue = (city: HTMLSelectElement) =>
    city.value
      ? city.value
      : this.setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            city: 'city not chosen',
          },
        }));
  validateFileAndGetValue = (file: HTMLInputElement) => {
    console.log(file.files);
    return file.files!.length > 0
      ? this.getBase64(file.files![0])
      : this.setState((prevState) => ({
          ...prevState,
          errors: {
            ...prevState.errors,
            avatar: 'no file upload',
          },
        }));
  };

  getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  clear = () => {
    this.setState({
      errors: {
        firstname: '',
        lastname: '',
        zipcode: '',
        birthdayDate: '',
        avatar: '',
        city: '',
      },
      submitActive: true,
    });
    this.firstnameInput.current!.value = '';
    this.lastnameInput.current!.value = '';
    this.zipcodeInput.current!.value = '';
    this.birthdayDateInput.current!.value = '';
    this.genderSwitcher.current!.checked = false;
    this.avatarInput.current!.value = '';
    this.citySelect.current!.value = '';
    Object.values(this.refGiftsArr).forEach((e) => (e.current!.checked = false));
  };

  checkErrors = () =>
    Object.values(this.state.errors).filter((e) => e !== '').length > 0 ? true : false;

  changeInput = (ref: React.RefObject<HTMLInputElement> | React.RefObject<HTMLSelectElement>) => {
    const id = ref.current?.id;
    this.setState((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [`${id}`]: '',
      },
    }));
  };

  render() {
    return (
      <form className="profile-form" onSubmit={this.submitFormHandler}>
        <div className="profile-item">
          <span className="profile-item__title">Firstname</span>
          <div className="input-container">
            <input
              type="text"
              ref={this.firstnameInput}
              id="firstname"
              onChange={() => this.changeInput(this.firstnameInput)}
              required
            ></input>
            <label className="label-validation" htmlFor="firstname">
              {this.state.errors.firstname}
            </label>
          </div>
        </div>
        <div className="profile-item">
          <span className="profile-item__title">Lastname</span>
          <div className="input-container">
            <input
              type="text"
              ref={this.lastnameInput}
              id="lastname"
              onChange={() => this.changeInput(this.lastnameInput)}
              required
            ></input>
            <label className="label-validation" htmlFor="lastname">
              {this.state.errors.lastname}
            </label>
          </div>
        </div>
        <div className="profile-item">
          <span className="profile-item__title">Zipcode</span>
          <div className="input-container">
            <input
              type="number"
              ref={this.zipcodeInput}
              id="zipcode"
              onChange={() => this.changeInput(this.zipcodeInput)}
              required
            ></input>
            <label className="label-validation" htmlFor="zipcode">
              {this.state.errors.zipcode}
            </label>
          </div>
        </div>
        <div className="profile-item">
          <span className="profile-item__title">Birthday date</span>
          <div className="input-container">
            <input
              type="date"
              ref={this.birthdayDateInput}
              id="birthdayDate"
              onChange={() => this.changeInput(this.birthdayDateInput)}
              required
            ></input>
            <label className="label-validation" htmlFor="birthdayDate">
              {this.state.errors.birthdayDate}
            </label>
          </div>
        </div>
        <div className="profile-item">
          <span className="profile-item__title">Choose your city:</span>
          <div className="input-container">
            <select
              name="city"
              id="city"
              ref={this.citySelect}
              onChange={() => this.changeInput(this.citySelect)}
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
              {this.state.errors.city}
            </label>
          </div>
        </div>
        <div className="profile-item">
          <span className="profile-item__title">Gender</span>
          <Switcher refProp={this.genderSwitcher} id="gender"></Switcher>
        </div>
        <div className="profile-item">
          <span className="profile-item__title">Avatar</span>
          <div className="input-container">
            <input
              type="file"
              ref={this.avatarInput}
              id="avatar"
              accept="image/*"
              onChange={() => this.changeInput(this.avatarInput)}
              required
            ></input>
            <label className="label-validation" htmlFor="avatar">
              {this.state.errors.avatar}
            </label>
          </div>
        </div>
        <fieldset className="gift-checklist">
          <legend>Choose your an additional gift</legend>
          {Object.entries(this.refGiftsArr).map((e) => (
            <div key={e[0]}>
              <label htmlFor={e[0]}>{e[0]}</label>
              <input type="checkbox" ref={e[1]} id={e[0]}></input>
            </div>
          ))}
        </fieldset>
        <button className="submit-btn" type="submit" disabled={!this.state.submitActive}>
          Submit
        </button>
      </form>
    );
  }
}

export default ProfileForm;

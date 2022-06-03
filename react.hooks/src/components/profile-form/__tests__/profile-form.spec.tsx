import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfileForm from '../profile-form';
Enzyme.configure({ adapter: new Adapter() });

const addCard = jest.fn();

describe('test ProfileForm component', () => {
  const wrapper = shallow(<ProfileForm addCard={addCard} />);
  jest.spyOn(window, 'alert').mockImplementation(() => {});
  it('should render ProfileForm component', async () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('form should be disabled', () => {
    const submitBtn = wrapper.find('.submit-btn');
    submitBtn.simulate('click');
    expect(window.alert).not.toHaveBeenCalled();
  });

  // it('should print firstname value', () => {
  //   const readAsBinaryStringSpy = jest.spyOn(FileReader.prototype, 'readAsBinaryString');
  //   const firstname = wrapper.find('#firstname');
  //   const lastname = wrapper.find('#lastname');
  //   const zipcode = wrapper.find('#zipcode');
  //   const birthday = wrapper.find('#birthday');
  //   const gender = wrapper.find('#gender');
  //   const avatar = wrapper.find('#avatar');
  //   const city = wrapper.find('#city');
  //   firstname.simulate('change', {target:{value: mockCardArr[0].firstname}});
  //   lastname.simulate('change', {target:{value: mockCardArr[0].lastname}});
  //   zipcode.simulate('change', {target:{value: mockCardArr[0].zipcode}});
  //   birthday.simulate('change', {target:{value: mockCardArr[0].birthday}});
  //   gender.simulate('change', {target:{value: mockCardArr[0].gender}});
  //   avatar.simulate('change', {target:{value: mockCardArr[0].avatar}});
  //   city.simulate('change', {target:{value: mockCardArr[0].city}});
  //   const submitBtn = wrapper.find('.submit-btn');
  //   submitBtn.simulate('click');
  //   expect(window.alert).toHaveBeenCalled();
  // });
});

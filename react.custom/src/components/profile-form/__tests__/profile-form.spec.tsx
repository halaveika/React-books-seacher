import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfileForm from '../profile-form';
Enzyme.configure({ adapter: new Adapter() });
import { mockCardArr } from '../../../common/mocks/profile-card__array';

const addCard = jest.fn();

describe('test ProfileForm component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render ProfileForm component', async () => {
    const wrapper = shallow<ProfileForm>(<ProfileForm addCard={addCard} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('form should be disabled', () => {
    const handleSubmit = jest.fn();
    const wrapper = mount(<ProfileForm addCard={addCard} />);
    const submitBtn = wrapper.find('.submit-btn');
    submitBtn.simulate('click');
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  // it('should print firstname value', () => {
  //   const wrapper = mount(
  //     <ProfileForm addCard={addCard}/>
  //   );
  //   const firstnameInput = wrapper.find('#firstname');
  //   console.log(firstnameInput);
  //   firstnameInput.simulate('change', {target:{value: mockCardArr[0].firstname}});
  //   const instance = wrapper.instance() as ProfileForm;
  //   expect(instance.firstnameInput.current?.value).toBe(mockCardArr[0].firstname);
  // });
});

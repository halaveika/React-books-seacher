import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfileForm from '../profile-form';
Enzyme.configure({ adapter: new Adapter() });
import { mockCardArr } from '../../../common/mocks/profile-card__array';

const addCard = jest.fn();

describe('test ProfileForm component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  jest.spyOn(window, 'alert').mockImplementation(() => {});
  it('should render ProfileForm component', async () => {
    const wrapper = shallow(<ProfileForm addCard={addCard} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('form should be disabled', () => {
    const wrapper = mount(<ProfileForm addCard={addCard} />);
    const submitBtn = wrapper.find('.submit-btn');
    submitBtn.simulate('click');
    expect(addCard).not.toHaveBeenCalled();
    // expect(wrapper.find('button').props().disabled).toBe(true);
    wrapper.unmount();
  });

  it('should submit form', async () => {
    // const file = new File([new Blob()], 'test.jpg', {
    //   type: 'image/jpg',
    //   lastModified: Date.now(),
    // });
    //  const wrapper = mount(<ProfileForm addCard={addCard} />);
    // const readAsBinaryStringSpy = jest.spyOn(FileReader.prototype, 'readAsBinaryString');
    // await act(async () => {
    //   wrapper.find('#firstname').simulate('input', {target:{value: mockCardArr[0].firstname}});
    //   wrapper.find('#lastname').simulate('input', {target:{value: mockCardArr[0].lastname}});
    //   wrapper.find('#zipcode').simulate('input', {target:{value: mockCardArr[0].zipcode}});
    //   wrapper.find('#birthday').simulate('input', {target:{value: mockCardArr[0].birthday}});
    //   wrapper.find('input#gender').simulate('input', {target:{value: true}});
    //   wrapper.find('#avatar').simulate('input', {target:{value:file}});
    //   wrapper.find('#city').simulate('input', {target:{value: mockCardArr[0].city}});
    // });
    // await act(async () => {
    //   wrapper.find('button').simulate('click');
    // });
    // expect(addCard).toHaveBeenCalled();
    // expect(wrapper.find('button').props().disabled).toBe(false);
  });
});

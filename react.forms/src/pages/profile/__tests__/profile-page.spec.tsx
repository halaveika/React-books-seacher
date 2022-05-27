import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfilePage from '../profile-page';
Enzyme.configure({ adapter: new Adapter() });
import { mockCardArr } from '../../../common/mocks/profile-card__array';

describe('test ProfilePage component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render ProfilePage component', async () => {
    const wrapper = shallow<ProfilePage>(<ProfilePage title="test" />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should save value in localstorage during componentWillUnmount', () => {
    const wrapper = shallow<ProfilePage>(<ProfilePage title="test" />);
    jest.spyOn(Storage.prototype, 'setItem');
    const componentWillUnmount = jest.spyOn(wrapper.instance(), 'componentWillUnmount');
    wrapper.unmount();
    expect(componentWillUnmount.mock.calls.length).toBe(1);
  });

  it('should fire addCard', () => {
    const wrapper = shallow<ProfilePage>(<ProfilePage title="test" />);
    wrapper.instance().addCard(mockCardArr[0]);
    expect(wrapper.instance().state.cards).toEqual([mockCardArr[0]]);
  });
});

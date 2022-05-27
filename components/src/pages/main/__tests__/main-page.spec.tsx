import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MainPage from '../main-page';
Enzyme.configure({ adapter: new Adapter() });

describe('test MainPage component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render MainPage component', async () => {
    const wrapper = shallow<MainPage>(<MainPage title="test" />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should save value in localstorage during componentWillUnmount', () => {
    const wrapper = shallow<MainPage>(<MainPage title="test" />);
    jest.spyOn(Storage.prototype, 'setItem');
    const componentWillUnmount = jest.spyOn(wrapper.instance(), 'componentWillUnmount');
    wrapper.unmount();
    expect(componentWillUnmount.mock.calls.length).toBe(1);
  });

  it('should fire setSearchValue', () => {
    const wrapper = shallow<MainPage>(<MainPage title="test" />);
    const event = {
      preventDefault() {},
      target: { value: 'test' },
    } as React.ChangeEvent<HTMLInputElement>;
    wrapper.instance().setSearchValue(event);
    expect(wrapper.instance().state.searchValue).toBe('test');
  });
});

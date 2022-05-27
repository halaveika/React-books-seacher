import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import SearchBar from '../search-bar';

const setSearchValue = jest.fn();

describe('test SearchBar component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const wrapper = shallow<SearchBar>(
    <SearchBar searchValue={''} setSearchValue={setSearchValue} />
  );

  it('should render SearchBar component', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should handle onChange event', () => {
    const changeble = wrapper.find('input');
    changeble.simulate('change');
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(setSearchValue).toBeCalled();
  });
});

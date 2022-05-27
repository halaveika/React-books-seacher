import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import CardList from '../card-list';

describe('test Card component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render CardList component', async () => {
    const wrapper = shallow<CardList>(<CardList searchValue="" />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should filter CardList component by title', async () => {
    const wrapper = shallow<CardList>(<CardList searchValue="Never Simple" />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

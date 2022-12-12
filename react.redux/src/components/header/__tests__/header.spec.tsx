import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import Header from '../header';

describe('test Header component', () => {
  it('should render Header component loaded', async () => {
    const wrapper = shallow<Header>(<Header title="cards" />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

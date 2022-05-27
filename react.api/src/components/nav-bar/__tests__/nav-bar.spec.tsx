import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import NavBar from '../nav-bar';

describe('test NavBar component', () => {
  it('should render NavBar component loaded', async () => {
    const wrapper = shallow<NavBar>(<NavBar />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

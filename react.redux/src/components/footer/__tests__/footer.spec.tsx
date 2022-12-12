import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import Footer from '../footer';

describe('test Footer component', () => {
  it('should render Footer component loaded', async () => {
    const wrapper = shallow<Footer>(<Footer />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

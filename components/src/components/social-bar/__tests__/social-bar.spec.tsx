import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import SocialBar from '../social-bar';

describe('test SocialBar component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render SocialBar component loaded', async () => {
    const wrapper = shallow<SocialBar>(<SocialBar />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

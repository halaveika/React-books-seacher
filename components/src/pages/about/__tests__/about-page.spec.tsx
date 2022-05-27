import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AboutPage from '../about-page';
Enzyme.configure({ adapter: new Adapter() });

describe('test AboutPage component', () => {
  it('should render AboutPage component', async () => {
    const wrapper = shallow<AboutPage>(<AboutPage title="test" />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

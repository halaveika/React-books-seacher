import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import AppRouter from '../app-router';

describe('test AppRouter component', () => {
  it('should render AppRouter component loaded', async () => {
    const wrapper = shallow<AppRouter>(<AppRouter />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

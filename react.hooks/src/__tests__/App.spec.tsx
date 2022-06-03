import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../App';
Enzyme.configure({ adapter: new Adapter() });

describe('test MainPage component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render App component', async () => {
    const wrapper = shallow(<App />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

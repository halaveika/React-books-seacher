import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import NotFoundPage from '../not-found-page';
Enzyme.configure({ adapter: new Adapter() });

describe('test NotFoundPage component', () => {
  it('should render NotFoundPage component', async () => {
    const wrapper = shallow<NotFoundPage>(<NotFoundPage title="test" />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

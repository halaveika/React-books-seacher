import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import RatingBar from '../rating-bar';

describe('test RatingBar component', () => {
  it('should render RatingBar component loaded', async () => {
    const wrapper = shallow<RatingBar>(<RatingBar vote_average={4} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

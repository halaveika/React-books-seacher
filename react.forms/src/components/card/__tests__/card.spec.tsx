import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import { mockCardArr } from '../../../common/mocks/card__array';
import Card from '../card';

describe('test Card component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const wrapper = shallow<Card>(
    <Card
      id={mockCardArr[0].id}
      title={mockCardArr[0].title}
      author={mockCardArr[0].author}
      vote_average={mockCardArr[0].vote_average}
      poster={mockCardArr[0].poster}
      overview={mockCardArr[0].overview}
      price={mockCardArr[0].price}
    />
  );

  it('should render Card component', async () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should handle toggleHover', () => {
    const hovered = wrapper.find({ className: 'card' });
    expect(wrapper.instance().state.hovered).toBe(false);
    hovered.simulate('mouseenter');
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.instance().state.hovered).toBe(true);
  });

  it('should handle more-btn click', () => {
    const clickebale = wrapper.find({ className: 'more-btn' });
    expect(wrapper.instance().state.active).toBe(false);
    clickebale.simulate('click');
    expect(shallowToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.instance().state.active).toBe(true);
  });
});

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

  const wrapper = shallow(
    <Card
      authors={mockCardArr[0].authors}
      averageRating={mockCardArr[0].averageRating}
      categories={mockCardArr[0].categories}
      description={mockCardArr[0].description}
      language={mockCardArr[0].language}
      pageCount={mockCardArr[0].pageCount}
      printType={mockCardArr[0].printType}
      publishedDate={mockCardArr[0].publishedDate}
      publisher={mockCardArr[0].publisher}
      ratingsCount={mockCardArr[0].ratingsCount}
      subtitle={mockCardArr[0].subtitle}
      title={mockCardArr[0].title}
      imageLinks={mockCardArr[0].imageLinks}
    />
  );

  it('should render Card component', async () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should handle toggleHover', () => {
    const hovered = wrapper.find({ className: 'card' });
    hovered.simulate('mouseenter');
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should handle more-btn click', () => {
    const clickebale = wrapper.find({ className: 'more-btn' });
    clickebale.simulate('click');
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  // it('should handle toggleHover', () => {
  //   const hovered = wrapper.find({ className: 'card' });
  //   expect(wrapper.instance().state.hovered).toBe(false);
  //   hovered.simulate('mouseenter');
  //   expect(shallowToJson(wrapper)).toMatchSnapshot();
  //   expect(wrapper.instance().state.hovered).toBe(true);
  // });

  // it('should handle more-btn click', () => {
  //   const clickebale = wrapper.find({ className: 'more-btn' });
  //   expect(wrapper.instance().state.active).toBe(false);
  //   clickebale.simulate('click');
  //   expect(shallowToJson(wrapper)).toMatchSnapshot();
  //   expect(wrapper.instance().state.active).toBe(true);
  // });
});

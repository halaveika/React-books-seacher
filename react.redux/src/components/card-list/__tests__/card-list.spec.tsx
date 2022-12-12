import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mockCardArr } from '../../../common/mocks/card__array';
Enzyme.configure({ adapter: new Adapter() });
import CardList from '../card-list';

describe('test Card component', () => {
  it('should render CardList component', async () => {
    const wrapper = shallow<CardList>(<CardList cards={mockCardArr} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

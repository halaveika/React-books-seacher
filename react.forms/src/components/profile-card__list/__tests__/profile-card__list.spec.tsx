import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import ProfileCardList from '../profile-card__list';
import { mockCardArr } from '../../../common/mocks/profile-card__array';

describe('test ProfileCardList component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render ProfileCardList component', async () => {
    const wrapper = shallow<ProfileCardList>(<ProfileCardList cards={mockCardArr} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

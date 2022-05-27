import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import { mockCardArr } from '../../../common/mocks/profile-card__array';
import CardProfile from '../profile-card';

describe('test CardProfile component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const wrapper = shallow<CardProfile>(
    <CardProfile
      id={mockCardArr[0].id}
      firstname={mockCardArr[0].firstname}
      lastname={mockCardArr[0].lastname}
      zipcode={mockCardArr[0].zipcode}
      birthday={mockCardArr[0].birthday}
      gender={mockCardArr[0].gender}
      avatar={mockCardArr[0].avatar}
      city={mockCardArr[0].city}
      gifts={mockCardArr[0].gifts}
    />
  );

  it('should render Card component', async () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

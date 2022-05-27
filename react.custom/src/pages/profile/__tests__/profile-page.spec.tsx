import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProfilePage from '../profile-page';
Enzyme.configure({ adapter: new Adapter() });
import { BrowserRouter } from 'react-router-dom';
import { mockCardArr } from '../../../common/mocks/profile-card__array';
import { FORM_CARDS } from '../../../common/constants';

describe('test ProfilePage component', () => {
  it('should render ProfilePage component', async () => {
    const wrapper = shallow<typeof ProfilePage>(
      <BrowserRouter>
        <ProfilePage title="test" />
      </BrowserRouter>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should handle callback in useEffect after umnount component', () => {
    const spyGetItem = jest
      .spyOn(Storage.prototype, 'getItem')
      .mockImplementation((key: string) => JSON.stringify(mockCardArr));
    const spySetItem = jest.spyOn(Storage.prototype, 'setItem');
    const wrapper = mount(
      <BrowserRouter>
        <ProfilePage title="test" />
      </BrowserRouter>
    );
    expect(spyGetItem).toBeCalled();
    wrapper.unmount();
    expect(spySetItem).toBeCalled();
  });
});

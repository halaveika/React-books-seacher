import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MainPage from '../main-page';
import CardType from '../../../common/types/card';
import { BrowserRouter } from 'react-router-dom';
import HttpService from '../../../modules/api/http-service';
import { mockCardArr } from '../../../common/mocks/card__array';
Enzyme.configure({ adapter: new Adapter() });

type MainPageState = {
  searchValue: string;
  cards: CardType[];
  isLoading: boolean;
};

describe('test MainPage component', () => {
  it('should render MainPage component', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <MainPage title="test" />
      </BrowserRouter>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should handle useState change', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    jest
      .spyOn(HttpService, 'searchBooksRequest')
      .mockImplementation(() => Promise.resolve({ items: mockCardArr }));
    const wrapper = mount(
      <BrowserRouter>
        <MainPage title="test" />
      </BrowserRouter>
    );
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'test' } });
    input.simulate('keyDown', { key: 'Enter' });
    expect(useStateSpy).toBeCalledTimes(4);
  });
});

import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import Switcher from '../switcher';

describe('test Switcher component', () => {
  it('should render Switcher component loaded', async () => {
    const switcherRef = React.createRef<HTMLInputElement>();
    const wrapper = shallow<Switcher>(<Switcher refProp={switcherRef} id="testId" />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

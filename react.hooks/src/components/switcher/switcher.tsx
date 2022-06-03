import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './switcher.scss';

type SwitcherProps = {
  refProp: UseFormRegisterReturn;
  id: string;
};

class Switcher extends React.Component<SwitcherProps> {
  span = React.createRef<HTMLSpanElement>();

  render() {
    const { refProp, id } = this.props;
    return (
      <label className="switch">
        <input type="checkbox" {...refProp} id={id}></input>
        <span className="slider"></span>
      </label>
    );
  }
}

export default Switcher;

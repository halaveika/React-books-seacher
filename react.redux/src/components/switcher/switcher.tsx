import React from 'react';
import './switcher.scss';

type SwitcherProps = {
  refProp: React.RefObject<HTMLInputElement>;
  id: string;
};

class Switcher extends React.Component<SwitcherProps> {
  span = React.createRef<HTMLSpanElement>();

  render() {
    const { refProp, id } = this.props;
    return (
      <label className="switch">
        <input type="checkbox" ref={refProp} id={id}></input>
        <span className="slider"></span>
      </label>
    );
  }
}

export default Switcher;

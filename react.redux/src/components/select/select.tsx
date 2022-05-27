import React, { ChangeEvent } from 'react';
import './select.scss';

export type SelectProps = {
  classname: string;
  selectValue: (value: string | number) => void;
  initialValue: string | number;
  valueArr: string[] | number[];
};

const Select = (props: SelectProps) => {
  const { selectValue, initialValue, valueArr, classname } = props;
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    selectValue(e.target.value);
  };

  const renderOptions = (arr: string[] | number[]) =>
    arr.map((element) => (
      <option key={element} value={element}>
        {element}
      </option>
    ));

  return (
    <select className={classname} value={value} onChange={handleChange}>
      {renderOptions(valueArr)}
    </select>
  );
};

export default Select;

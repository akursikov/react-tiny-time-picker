import React from 'react';

function Input(props) {
  const { value, handleFocus, handleChange } = props;
  return (
    <input
      type="text"
      className="tiny-time-picker_input"
      value={value}
      onFocus={handleFocus}
      onChange={handleChange}
    />
  );
}

export default Input;

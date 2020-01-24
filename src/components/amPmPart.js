import React from 'react';

function Part(props) {
  const { currentPartRef, prevPartRef, val, setVal, onChange } = props;

  function handleChange(event) {
    const {
      target: { value },
    } = event;
    setVal(value);
    onChange(value);
  }

  function handleKeyDown(event) {
    const { keyCode } = event;
    const isArrowKey = keyCode >= 37 && keyCode <= 40;
    if (!isArrowKey) {
      return;
    }
    event.preventDefault();
    let newValue;
    if (event.keyCode == 37) {
      if (prevPartRef) {
        prevPartRef.current.focus();
      }
      return;
    } else if (event.keyCode == 38) {
      if (val == 'pm') {
        newValue = 'am';
      } else {
        return;
      }
    } else if (event.keyCode == 39) {
      return;
    } else if (event.keyCode == 40) {
      if (val == 'am') {
        newValue = 'pm';
      } else {
        return;
      }
    }
    setVal(newValue);
    onChange(newValue);
  }

  return (
    <select
      className="tiny-time-picker_input --ampm"
      ref={currentPartRef}
      value={val}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    >
      <option vlaue="am">am</option>
      <option vlaue="pm">pm</option>
    </select>
  );
}

export default Part;

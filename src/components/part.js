import React, { useState, useMemo } from 'react';

function Part(props) {
  const {
    currentPartRef,
    prevPartRef,
    nextPartRef,
    defaultValue,
    val,
    setVal,
    onChange,
    maxValue,
  } = props;
  // const [val, setVal] = useState(parseInt(defaultValue, 10));
  const [isNotTouchedSinceFocused, setIsNotTouchedSinceFocused] = useState(
    false
  );
  const maxFirstDigit = useMemo(
    function getFirstDigit() {
      return Math.floor(maxValue / 10);
    },
    [maxValue]
  );
  function handleChange(event) {
    setIsNotTouchedSinceFocused(false);
    const {
      target: { value: inputValue },
    } = event;
    if (inputValue == '') {
      setVal('');
      return;
    }
    if (!/\d{1,2}/.test(inputValue)) {
      return;
    }
    const inputIntValue = parseInt(inputValue, 10);

    let newValue;
    let shouldFocusNext = false;
    // handle the first digit
    if (inputValue.length == 1) {
      // clear input, cannot be first digit (e.g 9 for minutes -> 09)
      if (inputIntValue > maxFirstDigit) {
        newValue = `0${inputIntValue}`;
        shouldFocusNext = true;
        // clear input, no transformation required
      } else {
        newValue = inputIntValue.toString();
      }
      // handle the second digit
    } else if (inputValue.length == 2) {
      if (inputIntValue <= maxValue) {
        if (inputValue[0] == '0') {
          if (inputIntValue == 0) {
            newValue = '0';
          } else {
            newValue = `0${inputIntValue}`;
          }
        } else {
          newValue = inputIntValue;
        }
      } else {
        newValue = maxValue;
      }
      shouldFocusNext = true;
      // handle the third digit (when the value is already filled and you start typing over)
    } else if (inputValue.length == 3) {
      const firstNewDigit = parseInt(inputValue.substring(2), 10);
      if (firstNewDigit > maxFirstDigit) {
        newValue = `0${firstNewDigit}`;
        shouldFocusNext = true;
        // clear input, no transformation required
      } else {
        newValue = firstNewDigit.toString();
      }
      // empty input
    } else {
      newValue = inputValue;
    }
    setVal(newValue);
    onChange(newValue);
    if (nextPartRef && nextPartRef.current) {
      nextPartRef.current.focus();
    }

    return true;
  }

  function handleKeyDown(event) {
    const { keyCode } = event;
    const isArrowKey = keyCode >= 37 && keyCode <= 40;
    if (!isArrowKey) {
      return;
    }
    event.preventDefault();

    const intVal = parseInt(val);
    let newValue;
    if (event.keyCode == 37) {
      if (prevPartRef) {
        prevPartRef.current.focus();
      }
    } else if (event.keyCode == 38) {
      if (!intVal) {
        newValue = 1;
      } else if (intVal < maxValue) {
        newValue = intVal + 1;
      }
    } else if (event.keyCode == 39) {
      if (nextPartRef) {
        nextPartRef.current.focus();
      }
    } else if (event.keyCode == 40) {
      // todo empty input
      if (intVal > 0) {
        newValue = intVal - 1;
      } else {
        newValue = 0;
      }
    }
    setVal(`${newValue}`);
    onChange(`${newValue}`);
  }

  function handleFocus() {
    setIsNotTouchedSinceFocused(true);
  }

  function handleBlur() {
    setIsNotTouchedSinceFocused(false);
  }

  return (
    <input
      className=".tiny-time-picker_input"
      ref={currentPartRef}
      value={val}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

export default Part;

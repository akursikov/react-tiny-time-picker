import React, { useMemo } from 'react';

function Part(props) {
  const {
    currentPartRef,
    prevPartRef,
    nextPartRef,
    val,
    setVal,
    onChange,
    maxValue,
  } = props;

  const maxFirstDigit = useMemo(
    function getFirstDigit() {
      return Math.floor(maxValue / 10);
    },
    [maxValue]
  );

  function handleChange(event) {
    const {
      target: { value: inputValue },
    } = event;
    if (inputValue == '') {
      setVal('');
      return;
    }
    if (!/^\d{1,2}$/.test(inputValue)) {
      return;
    }
    const inputIntValue = parseInt(inputValue, 10);

    let newValue;
    let shouldFocusNext = false;
    // handle the first digit
    if (inputValue.length == 1) {
      // currently empty, the input cannot be first digit (e.g 9 for minutes -> 09)
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
        // if started typing with leading 0
        if (inputValue[0] == '0') {
          // potentially rare case. there is a 0 already in the text field and
          // the input is another 0. consider it's 0 afterball, should focus
          // next part.
          if (inputIntValue == 0) {
            newValue = '0';
          } else {
            newValue = `0${inputIntValue}`;
          }
        } else {
          newValue = inputIntValue;
        }
        // if the result number is higher than max value, use max value
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
    if (shouldFocusNext) {
      if (nextPartRef && nextPartRef.current) {
        nextPartRef.current.focus();
        nextPartRef.current.select();
      } else {
        currentPartRef.current.blur();
      }
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
      return;
    } else if (event.keyCode == 38) {
      if (!intVal) {
        newValue = 1;
      } else if (intVal < maxValue) {
        newValue = intVal + 1;
      } else {
        return;
      }
    } else if (event.keyCode == 39) {
      if (nextPartRef) {
        nextPartRef.current.focus();
      }
      return;
    } else if (event.keyCode == 40) {
      // todo empty input
      if (intVal > 0) {
        newValue = intVal - 1;
      } else {
        return;
      }
    }
    setVal(`${newValue}`);
    onChange(`${newValue}`);
  }

  function handleClick() {
    currentPartRef.current.select();
  }

  return (
    <input
      className="tiny-time-picker_input"
      ref={currentPartRef}
      value={val}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      onChange={handleChange}
    />
  );
}

export default Part;

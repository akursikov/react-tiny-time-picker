import React, { useState, useMemo } from 'react';

function Part(props) {
  const {
    currentPartRef,
    prevPartRef,
    nextPartRef,
    initialValue,
    maxValue,
  } = props;
  const [val, setVal] = useState(parseInt(initialValue, 10));
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

    // handle the first digit
    if (inputValue.length == 1) {
      // clear input, cannot be first digit (e.g 9 for minutes -> 09)
      if (inputIntValue > maxFirstDigit) {
        setVal(`0${inputIntValue}`);
        nextPartRef.current.focus();
        // clear input, no transformation required
      } else {
        setVal(inputIntValue.toString());
      }
      return true;
    }

    // handle the second digit
    if (inputValue.length == 2) {
      if (inputIntValue <= maxValue) {
        if (inputValue[0] == '0') {
          if (inputIntValue == 0) {
            setVal('0');
          } else {
            setVal(`0${inputIntValue}`);
          }
        } else {
          setVal(inputIntValue);
        }
      } else {
        setVal(maxValue);
      }
      nextPartRef.current.focus();
      return true;
    }

    // handle the third digit (when the value is already filled and you start typing over)
    if (inputValue.length == 3) {
      const firstNewDigit = parseInt(inputValue.substring(2), 10);
      if (firstNewDigit > maxFirstDigit) {
        setVal(`0${firstNewDigit}`);
        nextPartRef.current.focus();
        // clear input, no transformation required
      } else {
        setVal(firstNewDigit.toString());
      }
      return true;
    }

    // empty input
    setVal(inputValue);
    debugger;
    return true;
  }

  function handleKeyDown(event) {
    const { keyCode } = event;
    const isArrowKey = keyCode >= 37 && keyCode <= 40;
    if (!isArrowKey) {
      return;
    }
    event.preventDefault();

    if (event.keyCode == 37) {
      if (prevPartRef) {
        prevPartRef.current.focus();
      }
    } else if (event.keyCode == 38) {
      if (!val) {
        setVal(1);
      } else if (val < maxValue) {
        setVal(val + 1);
      }
    } else if (event.keyCode == 39) {
      if (nextPartRef) {
        nextPartRef.current.focus();
      }
    } else if (event.keyCode == 40) {
      if (!val) {
        if (val != 0) {
          setVal(maxValue);
        }
      } else {
        setVal(val - 1);
      }
    }
  }

  function handleFocus() {
    setIsNotTouchedSinceFocused(true);
  }

  function handleBlur() {
    setIsNotTouchedSinceFocused(false);
  }

  return (
    <input
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

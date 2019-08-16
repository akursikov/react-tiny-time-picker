import React, { useState, useEffect, useRef } from 'react';
import StandartInput from './components/input';
import StandartHoursSelector from './components/hoursSelector';
import StandartMinutesSelector from './components/minutesSelector';
import StandartAmpmSelector from './components/ampmSelector';
const StandartSecondsSelector = StandartMinutesSelector;
// const StandartInput = React.lazy(() => import('./components/input'));

const formatRegexp = /^(\d{1,2}):(\d{1,2}):(\d{1,2}) ([ap]m)$/i;

function buildValue(hours, minutes, seconds, ampm) {
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

function TinyTimePicker(props) {
  const { initialValue, width, components, onChange } = props;
  const componentRef = useRef();
  const [value, setValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);
  const match = formatRegexp.exec(value);
  const [_value, hours, minutes, seconds, ampm] = match;
  function handleInputChange() {
    onChange(value);
  }
  function handleInputFocus() {
    setIsOpen(true);
  }
  useEffect(() => {
    function handleOutsideClick(event) {
      if (!componentRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen]);
  function setHours(hour) {
    setValue(buildValue(hour, minutes, seconds, ampm));
  }
  function setMinutes(minute) {
    setValue(buildValue(hours, minute, seconds, ampm));
  }
  function setSeconds(second) {
    setValue(buildValue(hours, minutes, second, ampm));
  }
  function setAmpm(ampm) {
    setValue(buildValue(hours, minutes, seconds, ampm));
  }
  return (
    <div
      ref={componentRef}
      className="tiny-time-picker"
      style={{ width: `${width || 200}px` }}
    >
      <StandartInput
        value={value}
        handleFocus={handleInputFocus}
        handleChange={handleInputChange}
      />
      {isOpen && (
        <div className="picker">
          <StandartHoursSelector hours={hours} handleClick={setHours} />
          <StandartMinutesSelector minutes={minutes} handleClick={setMinutes} />
          <StandartSecondsSelector minutes={seconds} handleClick={setSeconds} />
          <StandartAmpmSelector ampm={ampm} handleClick={setAmpm} />
        </div>
      )}
    </div>
  );
}

export default TinyTimePicker;

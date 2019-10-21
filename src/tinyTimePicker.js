import React, { useState, useEffect, useRef } from 'react';
import StandartInput from './components/input';
import StandartHoursSelector from './components/hoursSelector';
import StandartMinutesSelector from './components/minutesSelector';
import StandartAmpmSelector from './components/ampmSelector';
const StandartSecondsSelector = StandartMinutesSelector;

const formatRegexp = /^(\d{1,2}):(\d{1,2}):(\d{1,2}) ([ap]m)$/i;

function buildValue(hours, minutes, seconds, ampm) {
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

function TinyTimePicker(props) {
  const {
    initialValue,
    width,
    components,
    use12Hours = false,
    disabledOptions = {},
    onChange,
  } = props;
  const componentRef = useRef();
  const hoursSelectorRef = useRef();
  const minutesSelectorRef = useRef();
  const secondsSelectorRef = useRef();
  const ampmSelectorRef = useRef();
  const [value, setValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);
  const match = formatRegexp.exec(value);
  const [, hours, minutes, seconds, ampm] = match;
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

  const HoursSelector =
    components && components.HoursSelector
      ? components.HoursSelector
      : StandartHoursSelector;

  const MinutesSelector =
    components && components.MinutesSelector
      ? components.MinutesSelector
      : StandartMinutesSelector;

  const SecondsSelector =
    components && components.SecondsSelector
      ? components.SecondsSelector
      : StandartSecondsSelector;

  const AmpmSelector =
    components && components.AmpmSelector
      ? components.AmpmSelector
      : StandartAmpmSelector;

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
          <HoursSelector
            currentSelectorRef={hoursSelectorRef}
            nextSelectorRef={minutesSelectorRef}
            use12Hours={use12Hours}
            selectedOption={hours}
            disabledOptions={disabledOptions.hours}
            handleClick={setHours}
          />
          <MinutesSelector
            currentSelectorRef={minutesSelectorRef}
            prevSelectorRef={hoursSelectorRef}
            nextSelectorRef={secondsSelectorRef}
            selectedOption={minutes}
            disabledOptions={disabledOptions.minutes}
            handleClick={setMinutes}
          />
          <SecondsSelector
            currentSelectorRef={secondsSelectorRef}
            prevSelectorRef={minutesSelectorRef}
            nextSelectorRef={ampmSelectorRef}
            selectedOption={seconds}
            disabledOptions={disabledOptions.seconds}
            handleClick={setSeconds}
          />
          <AmpmSelector
            currentSelectorRef={ampmSelectorRef}
            prevSelectorRef={secondsSelectorRef}
            selectedOption={ampm}
            disabledOptions={disabledOptions.ampm}
            handleClick={setAmpm}
          />
        </div>
      )}
    </div>
  );
}

export default TinyTimePicker;

import React, { useState, useEffect, useRef } from 'react';
import Part from './components/part';

const formatRegexp = /^(\d{1,2}):(\d{1,2}):(\d{1,2}) ([ap]m)$/i;

function buildValue(hours, minutes, seconds, ampm) {
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

function TinyTimePicker(props) {
  const {
    name,
    defaultValue,
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
  const [value, setValue] = useState(
    defaultValue ? defaultValue : '00:00:00 am'
  );
  const [isOpen, setIsOpen] = useState(false);
  const match = formatRegexp.exec(value);
  const [, hours, minutes, seconds, ampm] = match;
  const [hoursValue, setHoursValue] = useState(hours);
  const [minutesValue, setMinutesValue] = useState(minutes);
  const [secondsValue, setSecondsValue] = useState(seconds);

  function buildValue(h, m, s) {
    return `${h}:${m}:${s}`;
  }

  function handleChange(h, m, s) {
    onChange(buildValue(h, m, s));
  }

  return (
    <div
      ref={componentRef}
      className="tiny-time-picker"
      style={{ width: `${width || 200}px` }}
    >
      <Part
        currentPartRef={hoursSelectorRef}
        nextPartRef={minutesSelectorRef}
        defaultValue={hours}
        val={hoursValue}
        setVal={setHoursValue}
        onChange={h => handleChange(h, minutesValue, secondsValue)}
        maxValue={use12Hours ? 12 : 23}
      />
      <Part
        currentPartRef={minutesSelectorRef}
        prevPartRef={hoursSelectorRef}
        nextPartRef={secondsSelectorRef}
        defaultValue={minutes}
        val={minutesValue}
        setVal={setMinutesValue}
        onChange={m => handleChange(hoursValue, m, secondsValue)}
        maxValue={59}
      />
      <Part
        currentPartRef={secondsSelectorRef}
        prevPartRef={minutesSelectorRef}
        defaultValue={seconds}
        val={secondsValue}
        setVal={setSecondsValue}
        onChange={s => handleChange(hoursValue, minutesValue, s)}
        maxValue={59}
      />
    </div>
  );
}

export default TinyTimePicker;

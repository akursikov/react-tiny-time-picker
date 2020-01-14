import React, { useState, useEffect, useRef } from 'react';
import Part from './components/part';

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

  return (
    <div
      ref={componentRef}
      className="tiny-time-picker"
      style={{ width: `${width || 200}px` }}
    >
      <Part
        currentPartRef={hoursSelectorRef}
        nextPartRef={minutesSelectorRef}
        initialValue={hours}
        maxValue={use12Hours ? 12 : 23}
      />
      <Part
        currentPartRef={minutesSelectorRef}
        prevPartRef={hoursSelectorRef}
        nextPartRef={secondsSelectorRef}
        initialValue={minutes}
        maxValue={59}
      />
      <Part
        currentPartRef={secondsSelectorRef}
        prevPartRef={minutesSelectorRef}
        initialValue={seconds}
        maxValue={59}
      />
    </div>
  );
}

export default TinyTimePicker;

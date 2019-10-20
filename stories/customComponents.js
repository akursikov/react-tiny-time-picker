import React from 'react';
import TinyTimePicker from './../src';
import './../src/styles.css';

function CustomHoursSelector(props) {
  const { hours, handleClick } = props;
  return (
    <div className="picker_col">
      <div
        style={{ color: hours === 1 ? 'red' : '' }}
        onClick={() => handleClick(1)}
      >
        1 :)
      </div>
      <div
        style={{ color: hours === 1 ? 'green' : '' }}
        onClick={() => handleClick(4)}
      >
        4 :D
      </div>
    </div>
  );
}

function CustomMinutesSelector(props) {
  const { minutes, handleClick } = props;
  let mins = [];
  for (let i = 0; i < 60; i++) {
    mins.push(i);
  }
  return (
    <div className="picker_col">
      {mins.map(min => (
        <div
          key={min}
          style={{
            color:
              min == minutes
                ? 'red'
                : `#${9 - (min % 10)}0${min % 10}f${min % 10}0`,
          }}
          onClick={() => handleClick(min)}
        >
          {min}
        </div>
      ))}
    </div>
  );
}

function CustomSecondsSelector(props) {
  const { minutes, handleClick } = props;
  let secs = [];
  for (let i = 0; i < 60; i++) {
    secs.push(i);
  }
  return (
    <div className="picker_col">
      {secs.map(sec => (
        <div
          key={sec + 1}
          style={{
            color:
              sec == minutes
                ? 'red'
                : `#${sec % 10}00${9 - (sec % 10)}${sec % 10}f`,
          }}
          onClick={() => handleClick(sec)}
        >
          {sec} {sec == minutes ? `${sec} ${minutes}` : ''}
        </div>
      ))}
    </div>
  );
}

function CustomAmpmSelector(props) {
  const { ampm, handleClick } = props;
  return (
    <div className="picker_col">
      <div
        className={'am' === ampm ? 'picker_val--selected' : ''}
        onClick={() => handleClick('am')}
      >
        am (morning)
      </div>
      <div
        className={'pm' === ampm ? 'picker_val--selected' : ''}
        onClick={() => handleClick('pm')}
      >
        pm (evening)
      </div>
    </div>
  );
}

function CustomComponents() {
  return (
    <TinyTimePicker
      initialValue="3:38:12 pm"
      components={{
        HoursSelector: CustomHoursSelector,
        MinutesSelector: CustomMinutesSelector,
        SecondsSelector: CustomSecondsSelector,
        AmpmSelector: CustomAmpmSelector,
      }}
    />
  );
}
export default CustomComponents;

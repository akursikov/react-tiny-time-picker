import React from 'react';
import TinyTimePicker from './../src';
import './../src/styles.css';

const disabledOptions = {
  hours: [1, 3, 6],
  minutes: [1, 2, 3, 4, 5],
  seconds: [3, 4, 5, 6, 7, 8],
  ampm: ['am'],
};

function DisabledOptions() {
  return (
    <TinyTimePicker
      initialValue="3:38:12 pm"
      disabledOptions={disabledOptions}
    />
  );
}
export default DisabledOptions;

import React from 'react';
import TinyTimePicker from './../src';
import './../src/styles.css';

function Use12Hours() {
  return <TinyTimePicker initialValue="3:38:12 pm" use12Hours />;
}
export default Use12Hours;

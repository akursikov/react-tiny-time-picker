import React, { useState } from 'react';
import TinyTimePicker from './../src';
import './../src/styles.css';

function BasicUsage() {
  const [val, setVal] = useState('3:38:12 pm');
  return (
    <div>
      <div>
        <TinyTimePicker
          initialValue={val}
          onChange={newVal => setVal(newVal)}
        />
      </div>
      <div>{val}</div>
    </div>
  );
}
export default BasicUsage;

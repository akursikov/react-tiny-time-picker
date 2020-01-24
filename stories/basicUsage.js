import React, { useState } from 'react';
import TinyTimePicker from './../src';
import './../src/styles.css';

function BasicUsage() {
  const [val, setVal] = useState('3:38:12');
  return (
    <div>
      <div>
        <TinyTimePicker
          defaultValue={val}
          onChange={newVal => setVal(newVal)}
        />
      </div>
      <div>Time: {val}</div>
    </div>
  );
}
export default BasicUsage;

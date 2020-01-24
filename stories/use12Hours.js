import React, { useState } from 'react';
import TinyTimePicker from './../src';
import './../src/styles.css';

function Use12Hours() {
  const [val, setVal] = useState('3:38:12 pm');
  return (
    <React.Fragment>
      <div>
        <TinyTimePicker
          defaultValue="3:38:12 pm"
          use12Hours
          onChange={newVal => setVal(newVal)}
        />
      </div>
      <div>
        <div>Time: {val}</div>
      </div>
    </React.Fragment>
  );
}
export default Use12Hours;

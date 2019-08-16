import React from 'react';

const hoursOptions = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];

function HoursSelector(props) {
  const { hours, handleClick } = props;
  return (
    <div className="picker_col">
      {hoursOptions.map(hour => (
        <div
          key={hour}
          className={hour === hours ? 'picker_val--selected' : ''}
          onClick={() => handleClick(hour)}
        >
          {hour}
        </div>
      ))}
    </div>
  );
}

export default HoursSelector;

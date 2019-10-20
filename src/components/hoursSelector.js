import React from 'react';

const hours12Options = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const hours24Options = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  21,
  22,
  23,
];

function HoursSelector(props) {
  const { hours, use12Hours, disabledOptions, handleClick } = props;
  const hoursOptions = use12Hours ? hours12Options : hours24Options;
  function handleHoursClick(hour) {
    if (disabledOptions && disabledOptions.includes(hour)) {
      return;
    }
    handleClick(hour);
  }
  function handleKeyDown(event) {
    if (event.keyCode === 38) {
      event.preventDefault();
      handleHoursClick(parseInt(hours, 10) - 1);
      return;
    }
    if (event.keyCode === 40) {
      event.preventDefault();
      handleHoursClick(parseInt(hours, 10) + 1);
      return;
    }
  }
  return (
    <div className="picker_col" role="listbox" tabIndex="0">
      {hoursOptions.map(hour => {
        const isDisabled = disabledOptions && disabledOptions.includes(hour);
        return (
          <div
            key={hour}
            className={
              isDisabled
                ? 'picker_val--disabled'
                : hour === hours
                ? 'picker_val--selected'
                : ''
            }
            onClick={isDisabled ? () => {} : () => handleHoursClick(hour)}
            role="option"
            tabIndex="0"
            onKeyDown={handleKeyDown}
          >
            {hour}
          </div>
        );
      })}
    </div>
  );
}

export default HoursSelector;

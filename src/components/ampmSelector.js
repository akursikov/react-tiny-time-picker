import React from 'react';

const ampmOptions = ['am', 'pm'];

function MinutesSelector(props) {
  const { ampm, handleClick } = props;
  return (
    <div className="picker_col">
      {ampmOptions.map(ampmOption => (
        <div
          key={ampmOption}
          className={ampmOption === ampm ? 'picker_val--selected' : ''}
          onClick={() => handleClick(ampmOption)}
        >
          {ampmOption}
        </div>
      ))}
    </div>
  );
}

export default MinutesSelector;

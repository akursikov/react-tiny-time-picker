import React from 'react';

const ampmOptions = ['am', 'pm'];

function AmpmSelector(props) {
  const { ampm, disabledOptions, handleClick } = props;
  function handleAmpmClick(ampm) {
    if (disabledOptions && disabledOptions.includes(ampm)) {
      return;
    }
    handleClick(ampm);
  }
  return (
    <div className="picker_col">
      {ampmOptions.map(ampmOption => {
        const isDisabled =
          disabledOptions && disabledOptions.includes(ampmOption);
        return (
          <div
            key={ampmOption}
            className={
              isDisabled
                ? 'picker_val--disabled'
                : ampmOption === ampm
                ? 'picker_val--selected'
                : ''
            }
            onClick={isDisabled ? () => {} : () => handleAmpmClick(ampmOption)}
          >
            {ampmOption}
          </div>
        );
      })}
    </div>
  );
}

export default AmpmSelector;

import React from 'react';

function noop() {}

function BaseSelector(props) {
  const {
    options,
    selectedOption,
    disabledOptions,
    isAmpm,
    selectOption,
  } = props;
  function handleOptionClick(option) {
    if (disabledOptions && disabledOptions.includes(option)) {
      return;
    }
    selectOption(option);
  }

  function selectNewOptionIfPossible(getNewOption) {
    let newOption = isAmpm
      ? selectedOption == 'am'
        ? 'pm'
        : 'am'
      : getNewOptionIfExists(getNewOption);
    if (newOption) {
      selectOption(newOption);
    }
  }

  function getNewOptionIfExists(getNewOption) {
    let newOption = getNewOption(parseInt(selectedOption, 10));
    if (disabledOptions && disabledOptions.length > 0) {
      while (disabledOptions.includes(newOption)) {
        newOption = getNewOption(newOption);
      }
    }
    if (!options.includes(newOption)) {
      return null;
    }
    return newOption;
  }

  function handleKeyDown(event) {
    if (event.keyCode == 38) {
      event.preventDefault();
      function getPrevOption(option) {
        return option - 1;
      }
      selectNewOptionIfPossible(getPrevOption);
    } else if (event.keyCode == 40) {
      event.preventDefault();
      function getNextOption(option) {
        return option + 1;
      }
      selectNewOptionIfPossible(getNextOption);
    }
  }

  return (
    <div
      className="picker_col"
      role="listbox"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      {options.map(option => {
        const isDisabled = disabledOptions && disabledOptions.includes(option);
        return (
          <div
            key={option}
            className={
              isDisabled
                ? 'picker_val--disabled'
                : option === selectedOption
                ? 'picker_val--selected'
                : ''
            }
            onClick={isDisabled ? noop : () => handleOptionClick(option)}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
}

export default BaseSelector;

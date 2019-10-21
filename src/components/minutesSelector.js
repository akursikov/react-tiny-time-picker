import React from 'react';
import BaseSelector from './baseSelector';
import { minutesOptions } from './../options';

function MinutesSelector(props) {
  const { selectedOption, disabledOptions, handleClick } = props;
  return (
    <BaseSelector
      options={minutesOptions}
      selectedOption={selectedOption}
      disabledOptions={disabledOptions}
      selectOption={handleClick}
    />
  );
}

export default MinutesSelector;

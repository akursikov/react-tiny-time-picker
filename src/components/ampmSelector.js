import React from 'react';
import BaseSelector from './baseSelector';
import { ampmOptions } from './../options';

function AmpmSelector(props) {
  const { selectedOption, disabledOptions, handleClick } = props;
  return (
    <BaseSelector
      options={ampmOptions}
      selectedOption={selectedOption}
      disabledOptions={disabledOptions}
      isAmpm={true}
      selectOption={handleClick}
    />
  );
}

export default AmpmSelector;

import React from 'react';
import BaseSelector from './baseSelector';
import { hours12Options, hours24Options } from './../options';

function HoursSelector(props) {
  const {
    currentSelectorRef,
    nextSelectorRef,
    selectedOption,
    use12Hours,
    disabledOptions,
    handleClick,
  } = props;
  const hoursOptions = use12Hours ? hours12Options : hours24Options;
  return (
    <BaseSelector
      currentSelectorRef={currentSelectorRef}
      nextSelectorRef={nextSelectorRef}
      options={hoursOptions}
      selectedOption={selectedOption}
      disabledOptions={disabledOptions}
      selectOption={handleClick}
    />
  );
}

export default HoursSelector;

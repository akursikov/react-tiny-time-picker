import React from 'react';
import BaseSelector from './baseSelector';
import { minutesOptions } from './../options';

function MinutesSelector(props) {
  const {
    currentSelectorRef,
    prevSelectorRef,
    nextSelectorRef,
    selectedOption,
    disabledOptions,
    handleClick,
  } = props;
  return (
    <BaseSelector
      currentSelectorRef={currentSelectorRef}
      prevSelectorRef={prevSelectorRef}
      nextSelectorRef={nextSelectorRef}
      options={minutesOptions}
      selectedOption={selectedOption}
      disabledOptions={disabledOptions}
      selectOption={handleClick}
    />
  );
}

export default MinutesSelector;

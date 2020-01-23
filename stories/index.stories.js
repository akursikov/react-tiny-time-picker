import React from 'react';
import { storiesOf } from '@storybook/react';
import BasicUsage from './basicUsage';
import CustomComponents from './customComponents';
import Use12Hours from './use12Hours';
import DisabledOptions from './disabledOptions';
import ReactFinalForm from './reactFinalForm';

storiesOf('Tiny Time Picker', module)
  .add('Basic Usage', () => <BasicUsage />)
  .add('12 Hours Format', () => <Use12Hours />)
  // .add('Disabled Options', () => <DisabledOptions />)
  .add('Custom Components', () => <CustomComponents />)
  .add('React Final Form', () => <ReactFinalForm />);

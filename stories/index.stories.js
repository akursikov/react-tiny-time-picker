import React from 'react';
import { storiesOf } from '@storybook/react';
import BasicUsage from './basicUsage';
import CustomComponents from './customComponents';
import Use12Hours from './use12Hours';
import DisabledOptions from './disabledOptions';

storiesOf('Tiny Time Picker', module)
  .add('Basic Usage', () => <BasicUsage />)
  .add('Custom Components', () => <CustomComponents />)
  .add('12 Hours Format', () => <Use12Hours />)
  .add('Disabled Options', () => <DisabledOptions />);

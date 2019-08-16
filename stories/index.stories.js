import React from 'react';
import { storiesOf } from '@storybook/react';
import BasicUsage from './basicUsage';

storiesOf('Tiny Time Picker', module)
  .add('Basic Usage', () => <BasicUsage />)
  .add('Advanced Usage', () => <div>hi</div>);

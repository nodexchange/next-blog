import React from 'react';
import { storiesOf } from '@storybook/react';
import LifecycleLogger from '../components/Hello';

storiesOf('Lifecycle', module).add('logging', () => <LifecycleLogger />);
import React from 'react';
import { storiesOf } from '@storybook/react';
import HelloWorld from './Todo';

storiesOf('Basic', module).add('HelloWorld', () => <Todo />);
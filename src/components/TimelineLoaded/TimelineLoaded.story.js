import React from 'react';
import { storiesOf } from '@storybook/react';
import TimelineLoaded from './TimelineLoaded';

const events = [
    {
        show: {
            name: 'created new post "Hello World"',
            id: 1233,
            premiered: '2019-01-11T16:34:00.000Z',
            type: "Animation",
            language: "English"
        },
    },
    {
        show: {
            name: 'created new post "Hello World"',
            id: 1236,
            premiered: '2019-01-10T16:34:00.000Z',
            type: "Animation",
            language: "English"
        },
    },
    {
        show: {
            name: 'created new post "Hello World"',
            id: 1237,
            premiered: '2019-01-10T16:34:00.000Z',
            type: "Animation",
            language: "English"
        },
    },
    {
        show: {
            name: 'created new post "Hello World"',
            id: 1239,
            premiered: '2019-01-12T16:34:00.000Z',
            type: "Animation",
            language: "English"
        },
    },
    {
        show: {
            name: 'created new post "Hello World"',
            id: 1238,
            premiered: '2019-01-12T16:34:00.000Z',
            type: "Animation",
            language: "English"
        },
    },
];

storiesOf('TimelineLoaded', module)
    .add('basic', () => (
        <TimelineLoaded events={events.slice(0, -1)} total={5} />
    ))
    .add('fully loaded', () => <TimelineLoaded events={events} />)
    .add('empty', () => <TimelineLoaded />);
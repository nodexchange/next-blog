import React from 'react'
import { storiesOf } from '@storybook/react'
import EventList from './EventList'

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
]

storiesOf('EventList', module)
    .add('basic', () => <EventList events={events} />)
    .add('empty', () => <EventList />)
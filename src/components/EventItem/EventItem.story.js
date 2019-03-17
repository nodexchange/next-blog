import React from "react"
import { storiesOf } from "@storybook/react"
import EventItem from "./EventItem"

const event = {
  show: {
        name: 'modified post "Hello World"',
        id: 1233,
        premiered: '2019-01-11T16:34:00.000Z',
        type: "Animation",
        language: "English"
    },
}

const anonymousEvent = {
  show: {
    name: 'liked "Lorem Ipsum"',
    premiered: '2019-03-11T12:34:56.000Z',
},
}

const eventWithLongName = {
  show: {
    name: 
      "commented \"I don't agree. You should never try to do things this way, or you'll end up in a bad place.\"",
    premiered: '2019-03-11T12:34:56.000Z',
    type: "Animation",
    language: "English"
  }
}

storiesOf("EventItem", module)
  .add("basic", () => <EventItem event={event} />)
  .add("anonymous", () => <EventItem event={anonymousEvent} />)
  .add("long event name", () => <EventItem event={eventWithLongName} />)

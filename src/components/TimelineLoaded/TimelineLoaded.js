import React from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Slide from '@material-ui/core/Slide'
import { withStyles } from "@material-ui/core/styles"

import EventList from "../EventList/EventList"
import groupByDay from "../../lib/groupByDay"

const styles = {
  timeline: {
    width: 610,
    marginLeft: 'calc(50vw - 305px)',
  },
  day: {
    marginBottom: "1em"
  },
  details: {
    marginLeft: 90,
    width: '610px !important',
  },
  main: {
    margin: 'auto',
    width: 610
  }
}

const getDayString = date =>
  new Date(date).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  })

const TimelineLoadedView = ({
  events = [],
  onLoadMore,
  selectedClass,
  total,
  classes
}) => {
  const { days, eventsByDay } = groupByDay(events)
  if (days.length === 0) {
    return (
      <Typography color="error">
        Error: This list should not be empty.
      </Typography>
    )
  }
  const checked = true //this.state;
  return (
    <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
      <div className={classes.timeline + ' ' + classes[selectedClass]}>
        {days.map(day => (
          <div key={day} className={classes.day}>
            <Typography variant="subheading" gutterBottom>
              {getDayString(day)}
            </Typography>
            <EventList events={eventsByDay[day]} />
          </div>
        ))}
        {events.length < total && (
          <Button variant="contained" onClick={onLoadMore}>
            Load more events
          </Button>
        )}
      </div>
    </Slide>
  )
}

export default withStyles(styles)(TimelineLoadedView)

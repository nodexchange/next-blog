import React from 'react'
import Link from 'next/link'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'
import EventItem from '../EventItem/EventItem'

const styles = {
    root: {
        width: 600,
    },
}

const EventListView = ({ events = [], classes }) => (
    <Card className={classes.root}>
        <List>
            {events.map(event => (
                 <Link as={`/p/${event.show.id}`} href={`/post?id=${event.show.id}`}>
                    <EventItem event={event} key={event.show.id} />
                </Link>
            ))}
        </List>
    </Card>
)

const EventList = withStyles(styles)(EventListView)

export default EventList
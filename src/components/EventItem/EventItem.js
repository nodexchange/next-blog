import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '../Avatar/Avatar'

const styles = {
    truncate: {
        width: 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
}

const EventItemView = ({ event, classes }) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar user={event.show.language} />
        </ListItemAvatar>
        <ListItemText
            primary={
                <div className={classes.truncate}>
                    <strong>
                        {event.show.type ? event.show.type : 'Anonymous'}
                    </strong>{' '}
                    {event.show.name}
                </div>
            }
            secondary={new Date(event.show.premiered).toLocaleString()}
        />
    </ListItem>
)

const EventItem = withStyles(styles)(EventItemView)

export default EventItem
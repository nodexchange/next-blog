import React from "react"
import Link from "next/link"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import { withStyles } from "@material-ui/core/styles"
import Avatar from "../Avatar/Avatar"
import styles from "./EventItem.style"

const EventItemView = ({ event, classes }) => (
  <Link as={`/p/${event.show.id}`} href={`/post?id=${event.show.id}`}>
    <ListItem className={classes.activeLink}>
      <ListItemAvatar>
        <Avatar user={event.show.language} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <div className={classes.truncate}>
            <strong>{event.show.type ? event.show.type : "Anonymous"}</strong>{" "}
            {event.show.name}
          </div>
        }
        secondary={new Date(event.show.premiered).toLocaleString()}
      />
    </ListItem>
  </Link>
)

const EventItem = withStyles(styles)(EventItemView)

export default EventItem

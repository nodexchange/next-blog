import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { Header } from '../../components'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

const Layout = props => {
  const { classes, login } = props
  console.log('___ login  ' + login)
  return (
    <div
      style={layoutStyle}
      className={classes.root + ' ' + classes[props.selectedClass]}
    >
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Header login={login} />
        </Grid>
        <Grid item xs={12}>
          {props.children}
        </Grid>
        <Grid item xs={12}>
          <p>FOOTER HERE https://material-ui.com/layout/grid/ </p>
        </Grid>
      </Grid>
    </div>
  )
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.string
}

export default withStyles(styles)(Layout)

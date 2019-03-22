import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import { Layout } from '../components'
import { TodoList, MainPage } from '../containers'

const styles = {
  card: {
    maxWidth: 545,
    margin: 'auto',
    marginTop: 50
  },
  media: {
    height: 240,
  },
};

const Post = props => {
  const { classes } = props;
  return (
  <Layout selectedClass={'details'}>
    <Grid container spacing={12}>
      <Grid item xs={6}>
        <MainPage {...props} selectedClass={'details'} />
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.show.image.medium}
              title={props.show.image.medium}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.show.name}
              </Typography>
              <Typography component="p">
                {props.show.summary.replace(/<[\/]?p>/g, '')}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Layout>
  )
}

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`http://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(Post)

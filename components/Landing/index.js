import {
  Typography,
  Container,
  Grid,
  Box,
  Card,
  CardActions,
  Button,
  CardContent,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: theme.palette.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.secondary,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function landing() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="secondary">
            Hello! My name is Ndyabagye Henry
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyCenter="center"
        >
        <Grid item xs={2}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>{' '}
        </Grid>
        <Grid item xs={2}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>{' '}
        </Grid>
        </Grid>
      </Grid>
      <Container maxWidth="md" className={classes.root}>
        <Grid wrap spacing={2}>
          <Grid item xs>
            <Typography variant="h3" color="secondary">
              Hello! My name is Ndyabagye Henry
            </Typography>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima,
          ipsa molestiae iusto voluptatem amet provident dolore voluptates iste
          reprehenderit. Quam velit voluptate quae voluptatibus magnam eum
          tenetur atque repellendus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima,
          ipsa molestiae iusto voluptatem amet provident dolore voluptates iste
          reprehenderit. Quam velit voluptate quae voluptatibus magnam eum
          tenetur atque repellendus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima,
          ipsa molestiae iusto voluptatem amet provident dolore voluptates iste
          reprehenderit. Quam velit voluptate quae voluptatibus magnam eum
          tenetur atque repellendus!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minima,
          ipsa molestiae iusto voluptatem amet provident dolore voluptates iste
          reprehenderit. Quam velit voluptate quae voluptatibus magnam eum
          tenetur atque repellendus!
        </p>
      </Container>
    </>
  );
}

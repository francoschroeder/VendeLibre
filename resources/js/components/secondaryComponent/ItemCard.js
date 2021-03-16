import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function ItemCard({item}) {
  const classes = useStyles();
  let { id } = useParams();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={'/store/' + id + '/' + item.id}>
          Ver
        </Button>
      </CardActions>
    </Card>
  );
}
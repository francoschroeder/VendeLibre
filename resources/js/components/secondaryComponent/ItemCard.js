import React, { useState } from 'react';
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

export default function ItemCard({item, edit}) {
  const classes = useStyles();
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [editable, setEditable] = useState(false);

  let { id } = useParams();

  if (editable)
    return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <input
          className="MuiTypography-root MuiTypography-h5 MuiTypography-displayInline"
          size={title.length}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="MuiTypography-root MuiTypography-h7 MuiTypography-displayInline"
          size={description.length}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="MuiTypography-root MuiTypography-h7 MuiTypography-displayInline"
          size={price.length}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={'/store/' + id + '/' + item.id}>
          Ver
        </Button>
        <Button size="small" color="primary" onClick={() => setEditable(false)}>
          Listo
        </Button>
      </CardActions>
    </Card>
  );
  else if (edit)
    return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
        <Typography>
          {"$"+price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={'/store/' + id + '/' + item.id}>
          Ver
        </Button>
        <Button size="small" color="primary" onClick={() => setEditable(true)}>
          Editar
        </Button>
      </CardActions>
    </Card>
  );
  else  
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
        <Typography>
          {"$"+price}
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
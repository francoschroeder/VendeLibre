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
    maxWidth: 325,
  },
  cardMedia: {
    height: 200,
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function ItemCard({item, edit, onDelete, colorItem}) {
  const classes = useStyles();
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [editable, setEditable] = useState(false);
  const [image, setImage] = useState('/images/'+item.id);

  let { id } = useParams();

  if (editable)
    return (
    <Card className={classes.card} style = { {backgroundColor: colorItem}}>
      <input className= {classes.cardMedia} id={'uploadImage'+item.id} type="file" name="image" onChange={updateImage} hidden/>
      <label htmlFor={'uploadImage'+item.id}>
        <img className= {classes.cardMedia}src={image} onError={placeholderImage}/>
      </label>
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
        <Button size="small" color="primary" onClick={() => {
                                                          setEditable(false);
                                                          item.title = title;
                                                          item.description = description;
                                                          item.price = price;}}>
          Listo
        </Button>
      </CardActions>
    </Card>
  );
  else if (edit)
    return (
    <Card className={classes.card} style = { {backgroundColor: colorItem}}>
      <img className= {classes.cardMedia} src={image} onError={placeholderImage}/>
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
        <Button size="small" color="primary" onClick={eliminarItem}>
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
  else  
  return (
    <Card className={classes.card} style = { {backgroundColor: colorItem}}>
      <img className= {classes.cardMedia} src={image} onError={placeholderImage}/>
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
  
  function placeholderImage(e) {
    e.target.onerror=null;
    e.target.src="/images/placeholder.jpg";
  }

  function updateImage(e) {
    setImage(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();
    formData.append('img', e.target.files[0]);

    axios.post('/api/updateImage/' + item.id, formData, {
      headers: {
      'Content-Type': 'multipart/form-data',
    }
    })
    .then(function(response) {
      setEditable(false);
      window.alert(response.data);
    })
  }

  function eliminarItem() {
    onDelete(item.id);
    axios.delete('/api/deleteItem/'+item.id, {})
        .then(function(response) {
            console.log(response);
        })
}
}
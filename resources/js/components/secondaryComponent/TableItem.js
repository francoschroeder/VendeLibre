import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    width: 400,
  },
});
const tableStyle = makeStyles({
    root: {
     width: 400,
     display: 'flex',
    },
  });


export default function TableItem({item, edit}) {
  const classes = useStyles();
  const classestable = tableStyle();
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [editable, setEditable] = useState(false);
  const [image, setImage] = useState();
  let { id } = useParams();

  if (editable)
  return (
    <TableRow >
    <TableCell component="th" scope="row">
      <input id={'uploadImage'+item.id} type="file" name="image" onChange={updateImage} hidden/>
      <label htmlFor={'uploadImage'+item.id}>
        <img src={'/images/'+item.id} onError={placeholderImage}/>
      </label>
    </TableCell>
    <TableCell align="left">
      <Typography gutterBottom variant="h5" component="h2">
        <input
            className="MuiTypography-root MuiTypography-h5 MuiTypography-displayInline"
            size={title.length}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
      </Typography>
    </TableCell>
    <TableCell align="left">
      <Typography>
        <input
          className="MuiTypography-root MuiTypography-h7 MuiTypography-displayInline"
          size={description.length}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Typography>
    </TableCell>
    <TableCell align="left">
      <Typography>
        <input
          className="MuiTypography-root MuiTypography-h7 MuiTypography-displayInline"
          size={price.length}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Typography>
    </TableCell>
    <TableCell align="right">
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
    </TableCell>
  </TableRow>
  );
  else if (edit)
  return (
    <TableRow >
    <TableCell component="th" scope="row">
      <img src={'/images/'+item.id} onError={placeholderImage}/>
    </TableCell>
    <TableCell align="left">
      <Typography gutterBottom variant="h5" component="h2">
        {item.title}
      </Typography>
    </TableCell>
    <TableCell align="left">
      <Typography>
        {item.description}
      </Typography>
    </TableCell>
    <TableCell align="left">
      <Typography>
        {"$"+item.price}
      </Typography>
    </TableCell>
    <TableCell align="right">
      <Button size="small" color="primary" href={'/store/' + id + '/' + item.id}>
        Ver
      </Button>
      <Button size="small" color="primary" onClick={() => setEditable(true)}>
        Editar
      </Button>
    </TableCell>
  </TableRow>
    );
  else  
  return (
    <TableRow >
    <TableCell component="th" scope="row">
      <img src={'/images/'+item.id} onError={placeholderImage}/>
    </TableCell>
    <TableCell align="left">
      <Typography gutterBottom variant="h5" component="h2">
        {item.title}
      </Typography>
    </TableCell>
    <TableCell align="left">
      <Typography>
        {item.description}
      </Typography>
    </TableCell>
    <TableCell align="left">
      <Typography>
        {"$"+item.price}
      </Typography>
    </TableCell>
    <TableCell align="right">
      <Button size="small" color="primary" href={'/store/' + id + '/' + item.id}>
        Ver
      </Button>
    </TableCell>
  </TableRow>
  );

  function placeholderImage(e) {
    e.target.onerror=null;
    e.target.src="/images/placeholder.jpg";
  }

  function updateImage(e) {
    setImage(e.target.files[0]);

    const formData = new FormData();
    formData.append('img', image);

    axios.post('/api/updateImage/' + item.id, formData, {
      headers: {
      'Content-Type': 'multipart/form-data',
    }
    })
    .then(function(response) {
      console.log(response);
    })
  }
}

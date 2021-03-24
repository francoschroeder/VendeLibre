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
  let { id } = useParams();

  if (editable)
  return (
    <TableRow >
    <TableCell component="th" scope="row">
      Imagen
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
          <Typography>
          <input
          className="MuiTypography-root MuiTypography-h7 MuiTypography-displayInline"
          size={description.length}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
          </Typography>
          <Typography>
          <input
          className="MuiTypography-root MuiTypography-h7 MuiTypography-displayInline"
          size={price.length}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
          </Typography>
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
      Imagen
    </TableCell>
    <TableCell align="left">
      <Typography gutterBottom variant="h5" component="h2">
          {item.title}
          </Typography>
          <Typography>
          {item.description}
          </Typography>
          <Typography>
          {"$"+item.price}
          </Typography>
        
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
      Imagen
    </TableCell>
    <TableCell align="left">
      <Typography gutterBottom variant="h5" component="h2">
          {item.title}
          </Typography>
          <Typography>
          {item.description}
          </Typography>
          <Typography>
          {"$"+item.price}
          </Typography>
          <Button size="small" color="primary" href={'/store/' + id + '/' + item.id}>
            Ver
          </Button>
    </TableCell>
  </TableRow>
  );
}

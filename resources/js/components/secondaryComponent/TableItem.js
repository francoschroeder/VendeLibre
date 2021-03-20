import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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


export default function TabelItem({items}) {
  const classes = useStyles();
  const classestable = tableStyle();

  return (
    <TableContainer component={Paper} className={classestable.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

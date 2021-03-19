import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { list } from 'postcss';
import List from '@material-ui/core/List';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

function renderRow(items) {
  return (
    <div>  
    {items.map((item) => (
      <ListItem  key={item.id} >
          item
      </ListItem>
    ))}
    </div>
    
  
  );
}

export default function ListaItem({items}) {
  const classes = useStyles();

  return (
  
    <List className={classes.root} subheader={<li />}>
      {renderRow(items)}
      </List>
        
      
   
  );
}

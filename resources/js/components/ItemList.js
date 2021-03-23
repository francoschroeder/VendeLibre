import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormList from './FormList';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  TabelItem:{
    padding: '100 600px',
    display: 'flex',
    //backgroundColor: 'red'
  }
 
}));

const tableStyle = makeStyles({
  root: {
   width: 400,
   display: 'flex',
   padding: '100 600px',
   //backgroundColor: 'red'
  },
});

export default function ItemList({edit, items, setItems}) {
  const classes = useStyles();
  const classestable = tableStyle();

  if (edit)
  return (
    <div>
        {/*aca deberia poder elegir que opcion de listado desea 
          y ahi ir cambiando las forma de listado pero no se como
          lo mismo con el color de fondo, aca lo debria poder elegir y
          ahi cambia mos el atrubito backgroun y listo (eso ya anda)
        */}
      
      <FormList edit = {edit}
                      items = {items}
                      setItems = {setItems}/>
    </div>
  );
  else
  return (
  <div>
    <FormList edit = {edit}
                  items = {items}
                  setItems = {setItems}/>
  </div>);

}
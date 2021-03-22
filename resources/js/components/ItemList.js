import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from './secondaryComponent/ItemCard';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import TableItem from './secondaryComponent/TableItem';
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
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from './secondaryComponent/ItemCard';
import ListaItem from './secondaryComponent/ListaItem';
import TabelItem from './secondaryComponent/TableItem';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  TabelItem:{
    padding: '30 360px',
    display: 'flex',
  }
}));

export default function ItemList({edit, items, setItems}) {
	const classes = useStyles();
    let { id } = useParams();

	return (
    <div>
     {/* End hero unit */}
    
    {/* <ListaItem items = {items} ></ListaItem>
      </div>*/}
      <Container className={classes.TabelItem}>
        <TabelItem  items = {items}/>
      
      </Container>
  

    <Container className={classes.cardGrid} maxWidth="md">
         <Grid container spacing={4}>
            {items.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <ItemCard item = {item} edit = {edit}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
	);
}
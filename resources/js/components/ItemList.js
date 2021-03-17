import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from './secondaryComponent/ItemCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function ItemList({ edit }) {
	const classes = useStyles();
    let { id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() =>{
        window.axios = require('axios');

        axios.get('/api/getItemList/' + id)
            .then(function (response) {
                setItems(response.data)
        })
    }, []); 

	return (
		<Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {items.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <ItemCard item = {item} edit = {edit}/>
              </Grid>
            ))}
          </Grid>
        </Container>
	);
}
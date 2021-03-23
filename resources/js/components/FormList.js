import React, { useState, useEffect,Component } from 'react';
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
import TableItemClass from './secondaryComponent/TableItemClass';
import { SketchPicker } from 'react-color'

const useStyles = makeStyles ({
  cardGrid: {
    paddingTop: 9,
    paddingBottom: 9,
  },
  TabelItem:{
    padding: '100 600px',
    display: 'flex',
    //backgroundColor: 'red'
  }
 
});

const tableStyle = makeStyles({
  root: {
   width: 400,
   display: 'flex',
   padding: '100 600px',
   //backgroundColor: 'red'
  },
});

/*handleChangeComplete = (color) => {
this.setState({ background: color.hex });*/


export default class FormList extends Component {
  constructor(props){
     super(props);
  }

  render (){
    var opcion = 1;
    if (opcion == 1 ) {
      console.log('entro a render')
        return  this.tableItem();}
    else return this.cardItem();
  
  };
        
 
 
tableItem(){
  return (
    
    <div>
    
    <SketchPicker
        //quiero modificar el estado actual 
        
        //onChangeComplete={ this.handleChangeComplete }
      />
      <Container className={useStyles.TabelItem}>
        <TableContainer component={Paper} className={tableStyle.root}>  
        <Table className={useStyles.TableItem} aria-label="simple table" >
            <TableBody>
              {this.props.items.map((item) => (
                <TableItemClass key={item.id} item = {item} edit = {this.props.edit}/>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
      </Container>
  

      </div>
  )
}
cardItem(){
  
  return (
    <Container className={useStyles.cardGrid} maxWidth="md">
    <Grid container spacing={4}>
       {this.props.items.map((item) => (
         <Grid item key={item.id} xs={12} sm={6} md={4}>
           <ItemCard item = {item} edit = {item.edit}/>
         </Grid>
       ))}
     </Grid>
   </Container>
  )
  }
}
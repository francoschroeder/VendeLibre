import React, { useState, useEffect,Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from './secondaryComponent/ItemCard';

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
     this.state = {
      backgroundColor: '',
      cardGrid: {
        paddingTop: 9,
        paddingBottom: 9,
      },
      TabelItem:{
        padding: '100 600px',
        display: 'flex',
        backgroundColor: 'red'
      }
    };
    }
 

  render (){
    var opcion = 12;
    if (opcion == 1 ) {
      console.log('entro a render')
        return  this.tableItem();}
    else return this.cardItem();
  
  };
        
  handleChangeComplete(color, event) {
    this.setState({ background: color.hex });
  };

 
tableItem(){
  return (
    
    <div>
    
    <SketchPicker
        //quiero modificar el estado actual 
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
      <Container className={this.state.TabelItem}>
        <TableContainer component={Paper} className={tableStyle.root}>  
        <Table className={this.state.TableItem} aria-label="simple table" >
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
           <ItemCard item = {item} edit = {this.props.edit}/>
         </Grid>
       ))}
     </Grid>
   </Container>
  )
  }
}
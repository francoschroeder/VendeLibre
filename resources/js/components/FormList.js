import React, { useState, useEffect,Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from './secondaryComponent/ItemCard';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableItemClass from './secondaryComponent/TableItemClass';
import { SketchPicker } from 'react-color';
import { PhotoshopPicker, ChromePicker  } from 'react-color'

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
      background: '#9f3', 
      displayColorPicker: false,
      cardGrid: {
        paddingTop: 9,
        paddingBottom: 9,
      },
      TabelItem:{
        padding: '100 600px',
        display: 'flex',
        
      },

      color: {
        background: '#9f3'
      },

      itemStyle : this.props.style.item_style
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this)
    }
 
  render () {
    if (this.state.itemStyle == 1 )
    return  this.tableItem();
    else return this.cardItem();
  };
     
  handleClick(){
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose(){
    this.setState({ displayColorPicker: false })
  };
  handleChange(e){
    this.setState({ color: {background: e.hex} })
  };
 
tableItem(){
  return (
    <div>
      { this.renderBoton() }
      <div>
        <button onClick={ this.handleClick }>Edit Color</button>
        { this.state.displayColorPicker ? <div >
          <div onClick={ this.handleClose }/>
          <ChromePicker color={ this.state.color } onChange={ this.handleChange }/>
        </div> : null }
      </div>
      
      
      <Container className={this.state.TabelItem}>
        <TableContainer component={Paper} className={tableStyle.root} style={this.state.color}>  
        <Table className={this.state.TabelItem} style={this.state.color} aria-label="simple table" >
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
    { this.renderBoton() }
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

renderBoton() {
  if (this.props.edit)
    return (
      <Button onClick={() => {if (this.state.itemStyle == 1)
                              this.setState({itemStyle : 2})
                              else
                              this.setState({itemStyle : 1})}}>
        Cambiar Estilo
      </Button>
    );
}
}
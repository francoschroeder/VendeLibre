import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from './secondaryComponent/ItemCard';
import TableItem from './secondaryComponent/TableItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { SketchPicker } from 'react-color';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { PhotoshopPicker, ChromePicker  } from 'react-color'

const TABLE = "1";
const CARD  = "2"; 

const useStyles = makeStyles ((theme) => ({
  cardGrid: {
    paddingTop: 9,
    paddingBottom: 9,
    padding: '100 600px',
  },

  TableItem:{
    paddingTop: theme.spacing(3),
  },
  
  displayColor: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },

  okColorButton: {
    marginLeft: theme.spacing(2),
  },
}));

export default function FormList({edit, items, style, setItems, setBackground}) {
  const [color, setColor] = useState('#9f3');
  const [color2, setColor2] = useState('#9f3');
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const classes = useStyles();

  if (style.item_style == TABLE)
    return tableItem();
  else 
    return cardItem();
  
function tableItem(){
  return (
    <div style={{background : style.background_color}}>
      <Container className={classes.TableItem}>
        { renderColorPicker() }
        <TableContainer component={Paper} style={{background : style.background_color}}>  
        <Table style={{background : style.items_color}} aria-label="simple table" >
            <TableBody>
              {items.map((item) => (
                <TableItem key = {item.id} item = {item} edit = {edit} onDelete = {deleteItem}/>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
      </Container>
    </div>
  )
}

function cardItem() {
  return (
    <div style={{background : style.background_color}}>
    <Container className={classes.cardGrid} maxWidth="md">
    { renderColorPicker() }
    <Grid container spacing={4}>
       {items.map((item) => (
         <Grid item key={item.id} xs={12} sm={6} md={4}>
           <ItemCard item = {item} edit = {edit} items onDelete = {deleteItem} colorItem = {style.items_color} />
         </Grid>
       ))}
     </Grid>
   </Container>
   </div>
  )
}

function renderColorPicker() {
  if (edit)
    if (displayColorPicker)
      return (
          <table className={classes.displayColor}>
          <tbody>
          <tr>
              <th>
                <label>Color de Fondo</label>
                  <ChromePicker color={ color } onChange={ (e) => {setColor(e.hex); setBackground(e.hex); style.background_color = color} }/>
              </th>
              <th>
              <label>Color de Items</label>
                  <ChromePicker color={ color2 } onChange={ (e) => {setColor2(e.hex); style.items_color = color2} }/>
              </th>
              <th>
                <Button className={classes.okColorButton} variant="contained" color="primary" size="small" onClick={ () => displayColorPicker ? setDisplayColorPicker(false) : setDisplayColorPicker(true) }>
                  OK
                </Button>   
              </th>
          </tr>
          </tbody>
          </table>
      )
    else
      return (
        <div className={classes.displayColor}>
            <Button variant="contained" color="primary" size="small" onClick={ () => displayColorPicker ? setDisplayColorPicker(false) : setDisplayColorPicker(true) }>
              Editar Color
            </Button>
        </div>
      
      )
}

function deleteItem(id){
  var newItems = [];
  items.forEach(function(itemN) {
    if (itemN.id != id) {
      newItems.push(itemN)
    }
  });
   setItems(newItems);
  }
}
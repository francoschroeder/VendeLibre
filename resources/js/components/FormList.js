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

const useStyles = makeStyles ({
  cardGrid: {
    paddingTop: 9,
    paddingBottom: 9,
    padding: '100 600px',
   
  },
  TableItem:{
    padding: '100 600px',
    display: 'flex',

  },
  
  Buttons:{
    padding: '15px',
  }
});

const tableStyle = makeStyles({
  root: {
   width: 400,
   display: 'flex',
   padding: '100 600px',
  },
 
  
});

export default function FormList({edit, items, style, setItems}) {
  const [color, setColor] = useState('#9f3');
  const [itemStyle, setItemStyle] = useState(style.item_style);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [displayColorPickerItems, setDisplayColorPickerItems] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  if (style.item_style == TABLE)
    return tableItem();
  else 
    return cardItem();
  
function tableItem(){
  return (
    <div style={{background : style.background_color}}>
      { renderBotonCambiarEstilo() }
      { renderColorPicker() }
      <br></br>
      <Container className={useStyles.TableItem}>
        <TableContainer component={Paper} className={tableStyle.root} style={{background : style.background_color}}>  
        <Table className={useStyles.TableItem} style={{background : style.items_color}} aria-label="simple table" >
            <TableBody>
              {items.map((item) => (
                <TableItem key = {item.id} item = {item} edit = {edit} onDelete = {deleteItem(item)}/>
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
    <Container className={useStyles.cardGrid} maxWidth="md">
    { renderBotonCambiarEstilo() }
    { renderColorPicker() }
    <br></br>
    <Grid container spacing={4}>
       {items.map((item) => (
         <Grid item key={item.id} xs={12} sm={6} md={4}>
           <ItemCard item = {item} edit = {edit} items onDelete = {deleteItem} colorItem = {style.items_color}/>
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
        
          <table className={useStyles.Buttons}>
              <tr>
             <th>
                <button onClick={ () => displayColorPicker ? setDisplayColorPicker(false) : setDisplayColorPicker(true) }>
                  Edit Background
                </button>
                  <ChromePicker color={ color } onChange={ (e) => {setColor(e.hex); style.background_color = color} }/>
              </th>
              <th>
                <button onClick={ () => displayColorPickerItems ? setDisplayColorPickerItems(false) : setDisplayColorPickerItems(true) }>
                  Edit Color Item
                  </button>
                  <ChromePicker color={ color } onChange={ (e) => {setColor(e.hex); style.items_color = color} }/>
              </th>
          </tr>
          </table>
      )
    else
      return (
        <div>
            <button onClick={ () => displayColorPicker ? setDisplayColorPicker(false) : setDisplayColorPicker(true) }>
              Edit Background
            </button>
            <button onClick={ () => displayColorPickerItems ? setDisplayColorPickerItems(false) : setDisplayColorPickerItems(true) }>
              Edit Color Item
            </button>
        </div>
      
      )
}

function renderBotonCambiarEstilo() {
  if (edit)
    return (
      <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => setAnchorEl(e.currentTarget)}>
        Estilo
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => { changeStyle(CARD);
                                   setAnchorEl(null);}}>
          Tarjetas
        </MenuItem>
        <MenuItem onClick={() => { changeStyle(TABLE);
                                   setAnchorEl(null);}}>
          Lista
        </MenuItem>
      </Menu>
      </div>
    );
}

function changeStyle(sty) {
  setItemStyle(sty);
  style.item_style = sty;
}

function deleteItem(item){
  console.log('pepe');
  var newItems = [];
  for (let itemN in items){
    if (item != itemN)
      newItems.push(itemN)
  }
  //setItems(newItems);
}

}
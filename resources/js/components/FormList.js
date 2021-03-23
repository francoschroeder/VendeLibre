import React, { useState } from 'react';
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
  TableItem:{
    padding: '100 600px',
    display: 'flex',
  }
});

const tableStyle = makeStyles({
  root: {
   width: 400,
   display: 'flex',
   padding: '100 600px',
  },
});

export default function FormList({edit, items, style}) {
  const [color, setColor] = useState('#9f3');
  const [itemStyle, setItemStyle] = useState(style.item_style);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
 
  if (itemStyle == 1 )
    return tableItem();
  else 
    return cardItem();
  
  function tableItem(){
  return (
    <div>
      { renderBotonCambiarEstilo() }
      <div>
        <button onClick={ handleEditColor }>
          Edit Color
        </button>
        { displayColorPicker ? 
          <div >
          <ChromePicker color={ color } onChange={ (e) => {setColor(e.hex); style.background = color} }/>
          </div> : null }
      </div>
      
      <Container className={useStyles.TableItem}>
        <TableContainer component={Paper} className={tableStyle.root} style={{background : color}}>  
        <Table className={useStyles.TableItem} style={{background : color}} aria-label="simple table" >
            <TableBody>
              {items.map((item) => (
                <TableItemClass key={item.id} item = {item} edit = {edit}/>
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
    <Container className={useStyles.cardGrid} maxWidth="md">
    { renderBotonCambiarEstilo() }
    <Grid container spacing={4}>
       {items.map((item) => (
         <Grid item key={item.id} xs={12} sm={6} md={4}>
           <ItemCard item = {item} edit = {edit}/>
         </Grid>
       ))}
     </Grid>
   </Container>
  )
}

function renderBotonCambiarEstilo() {
  if (edit)
    return (
      <Button onClick={() => {if (itemStyle == 1)
                                setItemStyle(2);
                              else
                                setItemStyle(1)}}>
        Cambiar Estilo
      </Button>
    );
}

function handleEditColor() {
  if (displayColorPicker)
    setDisplayColorPicker(false);
  else
    setDisplayColorPicker(true);
}

function handleCambiarEstilo() {
  if (itemStyle == 1)
    setItemStyle(2);
  else
    setItemStyle(1)

  style.item_style = itemStyle;
}
}
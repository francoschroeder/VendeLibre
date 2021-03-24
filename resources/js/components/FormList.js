import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ItemCard from './secondaryComponent/ItemCard';
import TableItem from './secondaryComponent/TableItem';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { SketchPicker } from 'react-color';
import { PhotoshopPicker, ChromePicker  } from 'react-color'

const TABLE = "1";
const CARD  = "2"; 

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

  if (style.item_style == TABLE)
    return tableItem();
  else 
    return cardItem();
  
function tableItem(){
  return (
    <div>
      { renderBotonCambiarEstilo() }
      { renderColorPicker() }
      <Container className={useStyles.TableItem}>
        <TableContainer component={Paper} className={tableStyle.root} style={{background : style.background_color}}>  
        <Table className={useStyles.TableItem} style={{background : style.background_color}} aria-label="simple table" >
            <TableBody>
              {items.map((item) => (
                <TableItem key = {item.id} item = {item} edit = {edit}/>
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

function renderColorPicker() {
  if (edit)
    if (displayColorPicker)
      return (
        <div>
        <button onClick={ () => displayColorPicker ? setDisplayColorPicker(false) : setDisplayColorPicker(true) }>
          Edit Color
        </button>
          <ChromePicker color={ color } onChange={ (e) => {setColor(e.hex); style.background_color = color} }/>
        </div>
      )
    else
      return (
        <button onClick={ () => displayColorPicker ? setDisplayColorPicker(false) : setDisplayColorPicker(true) }>
          Edit Color
        </button>
      )
}

function renderBotonCambiarEstilo() {
  if (edit)
    return (
      <Button onClick={ handleCambiarEstilo }>
        Cambiar Estilo
      </Button>
    );
}

function handleCambiarEstilo() {
  if (style.item_style == TABLE) {
    setItemStyle(CARD);
    style.item_style = CARD;
  }
  else {
    setItemStyle(TABLE);
    style.item_style = TABLE;
  }
}
}
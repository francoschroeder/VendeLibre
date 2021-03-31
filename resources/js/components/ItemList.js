import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormList from './FormList';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



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
const TABLE = "1";
const CARD  = "2"; 
export default function ItemList({edit, items, setItems, style}) {
  const classes = useStyles();
  const classestable = tableStyle();
  const [itemStyle, setItemStyle] = useState(style.item_style);
  const [anchorEl, setAnchorEl] = useState(null);

 return (
    <div>
        {/*aca deberia poder elegir que opcion de listado desea 
          y ahi ir cambiando las forma de listado pero no se como
          lo mismo con el color de fondo, aca lo debria poder elegir y
          ahi cambia mos el atrubito backgroun y listo (eso ya anda)
        */}
      { renderBotonCambiarEstilo() }
      <FormList edit = {edit}
                      items = {items}
                      style = {style}
                      setItems = {setItems}
                      
                      />
    </div>
  );
  
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
  console.log("cambiando el etilo");
  setItemStyle(sty);
  style.item_style = sty;
}
  

}
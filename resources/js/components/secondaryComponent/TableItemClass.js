import React, { useState, useEffect,Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    width: 400,
  },
});
const tableStyle = makeStyles({
    root: {
     width: 400,
     display: 'flex',
    },
  });


export default class TableItemClass extends Component {
    constructor(props) {
        super(props);
     
    }   
render (){
    var editable = false;
      if (editable) {
        return  this.renderTableListEditable();}
        else if (this.props.edit){
         return this.renderTableListEdit();}
         else  
            {return this.renderTableList();}
        };

  renderTableListEditable(){
    //obatener variable del entorno
    var id = 1;
      return(
          <TableRow >
        <TableCell component="th" scope="row">
          Imagen
        </TableCell>
        <TableCell align="left">
          <Typography gutterBottom variant="h5" component="h2">
            <input
                className="MuiTypography-root MuiTypography-h5 MuiTypography-displayInline"
                size={this.props.title.length}
                value={this.props.title}
                onChange={(e) => setTitle(e.target.value)}
              />
              </Typography>
              <Typography>
              <input
              className="MuiTypography-root MuiTypography-h7 MuiTypography-displayInline"
              size={this.props.description.length}
              value={this.props.description}
              onChange={(e) => setDescription(e.target.value)}
            />
              </Typography>
              <Typography>
              <input
              className="MuiTypography-root MuiTypography-h7 MuiTypography-displayInline"
              size={this.props.price.length}
              value={this.props.price}
              onChange={(e) => setPrice(e.target.value)}
            />
              </Typography>
              <Button size="small" color="primary" href={'/store/' + id + '/' + this.props.item.id}>
                Ver
              </Button>
              <Button size="small" color="primary" onClick={() => {
                                                              setEditable(false);
                                                              this.props.item.title = title;
                                                              this.props.item.description = description;
                                                              this.props.item.price = price;}}>
              Listo
            </Button>
            </TableCell>
      </TableRow>)
  }
  renderTableListEdit(){
    var id = 1;
      return (
        <TableRow >
    <TableCell component="th" scope="row">
      Imagen
    </TableCell>
    <TableCell align="left">
      <Typography gutterBottom variant="h5" component="h2">
          {this.props.item.title}
          </Typography>
          <Typography>
          {this.props.item.description}
          </Typography>
          <Typography>
          {"$"+this.props.item.price}
          </Typography>
        
          <Button size="small" color="primary" href={'/store/' + id + '/' + this.props.item.id}>
            Ver
          </Button>
          <Button size="small" color="primary" onClick={() => setEditable(true)}>
          Editar
        </Button>
      </TableCell>
  </TableRow>
      )
  }
  renderTableList(){
    var id = 1;
    //let { id } = useParams();
      return (
        <TableRow >
    <TableCell component="th" scope="row">
      Imagen
    </TableCell>
    <TableCell align="left">
      <Typography gutterBottom variant="h5" component="h2">
          {this.props.item.title}
          </Typography>
          <Typography>
          {this.props.item.description}
          </Typography>
          <Typography>
          {"$"+this.props.item.price}
          </Typography>
          <Button size="small" color="primary" href={'/store/' + id + '/' + this.props.item.id}>
            Ver
          </Button>
    </TableCell>
  </TableRow>
      )
  }
  
}

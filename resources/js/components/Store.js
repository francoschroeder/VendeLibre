import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ItemList from './ItemList';

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Your Website
        </Link>{' '}
            {new Date().getFullYear()}
        {'.'}
        </Typography>
    );
}

function RenderBotonGuardar(edit) {
    if (edit)
        return (
            <div align="center">
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
            >
                Guardar
            </Button>
            </div>
        )
}

function RenderHeader(edit) {
    let { id } = useParams();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [editable, setEditable] = useState(false);

    useEffect(() =>{
        window.axios = require('axios');

        axios.get('/api/getStore/' + id)
            .then(function (response) {
                setName(response.data.name);
                setDescription(response.data.description);
        })
    }, []);

    if (editable)
        return (
            <React.Fragment>
            <div align="center">
            <input
                className="MuiTypography-root MuiTypography-h2 MuiTypography-displayInline"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="MuiTypography-root MuiTypography-h5 MuiTypography-displayInline"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            <Button variant="outlined" color="primary" onClick={() => setEditable(false)}>
                Listo
            </Button>
            </React.Fragment>
        )
    else if (edit)
        return (
            <React.Fragment>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    {description}
                </Typography>
                <Button variant="outlined" color="primary" onClick={() => setEditable(true)}>
                    Editar
                </Button>
            </React.Fragment>
        )
    else
        return (
            <React.Fragment>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    {description}
                </Typography>
            </React.Fragment>
        )
}

export default function Store({edit}) {
    const classes = useStyles();
    let { id } = useParams();

    return (
    <React.Fragment>
        <CssBaseline />
            <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    {RenderHeader(edit)}
                </Container>
            </div>
            <ItemList edit = {edit}/>
            {RenderBotonGuardar(edit)}
            </main>
        {/* Footer */}
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Develop by el Fuller Schroeder
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Aguante Macri
            </Typography>
            <Copyright />
        </footer>
        {/* End footer */}
    </React.Fragment>
  );
}

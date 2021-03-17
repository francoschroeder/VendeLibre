import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ItemList from './ItemList';

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

function RenderName(edit, name) {
    if (edit)
        return (
            <input
            className="MuiTypography-root MuiTypography-h4 MuiTypography-displayInline"
            value={name}
            />
        )
    else
        return (
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {name}
            </Typography>
        )
}

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

export default function Store({edit}) {
    const classes = useStyles();
    let { id } = useParams();
    const [name, setName] = useState();
    const [description, setDescription] = useState();

    useEffect(() =>{
        window.axios = require('axios');

        axios.get('/api/getStore/' + id)
            .then(function (response) {
                setName(response.data.name);
                setDescription(response.data.description);
        })
    }, []);

    return (
    <React.Fragment>
        <CssBaseline />
            <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    {RenderName(edit, name)}
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        {description}
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <ItemList edit = {edit}/>
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

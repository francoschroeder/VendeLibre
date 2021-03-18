import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import ItemList from './ItemList';
import Header from './Header';

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

export default function Store({edit}) {
    const classes = useStyles();

    return (
    <React.Fragment>
        <CssBaseline />
            <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Header edit={edit}/>
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

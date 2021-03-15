import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}),
);

export default function Button() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    
    </div>
  );
}
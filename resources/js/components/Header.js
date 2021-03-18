import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function RenderHeader({edit}) {
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
                size={name.length}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="MuiTypography-root MuiTypography-h5 MuiTypography-displayInline"
                size={description.length}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            <div align="center">
            <Button variant="outlined" color="primary" onClick={() => setEditable(false)}>
                Listo
            </Button>
            </div>
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
                <div align="center">
                <Button variant="outlined" color="primary" onClick={() => setEditable(true)}>
                    Editar
                </Button>
                </div>
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
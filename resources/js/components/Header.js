import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function RenderHeader({edit, name, setName, description, setDescription}) {
    let { id } = useParams();

    const [editable, setEditable] = useState(false);

    if (editable)
        return (
            <div>
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
            </div>
        )
    else if (edit)
        return (
            <div>
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
            </div>
        )
    else
        return (
            <div>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    {description}
                </Typography>
            </div>
        )
}
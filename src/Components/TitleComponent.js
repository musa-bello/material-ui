import React from 'react'
import {paper, rounded, alignText} from './CustomStyles'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

function TitleComponent() {
    return (
        <div style={paper}>
            <Button size="large" color="primary" variant="contained" style={rounded}>
                <Typography variant="h5">C</Typography>
            </Button>
            <Typography variant="subtitle1" gutterBottom style={alignText}>Christ The King College, Gwagwalada Abuja.</Typography>
        </div>
    )
}

export default TitleComponent

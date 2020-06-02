import React from 'react'
import {evenly, transformText} from './CustomStyles'
import Fab from '@material-ui/core/Fab';
import DescriptionIcon from '@material-ui/icons/Description';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';

function FloatingButtons() {
    return (
        <div style={evenly}>
          <Fab variant="extended" color="secondary" aria-label="add"  style={transformText}>
            SMS History
            <DescriptionIcon  /> 
          </Fab>

          <Fab variant="extended" color="primary" aria-label="add" style={transformText}>
            Buy SMS units
            <NavigateNextRoundedIcon  />
          </Fab>
        </div>
    )
}

export default FloatingButtons

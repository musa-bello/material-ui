import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import TableComponent from './Components/TableComponent';
import TitleComponent from './Components/TitleComponent';
import FloatingButtons from './Components/FloatingButtons';
import CardComponent from './Components/CardComponent';
import {grid} from './Components/CustomStyles'

function App() {
  
  return (
    <div className="App">
      <Grid container spacing={6} style={grid}>
        
        <Grid item xs={12} sm={7}>
          <TitleComponent />
          <TableComponent />
        </Grid>
        <Grid item xs={12} sm={5}>
          <FloatingButtons />
          <CardComponent />
        </Grid>
        
      </Grid>
    </div>
  );
}

export default App;

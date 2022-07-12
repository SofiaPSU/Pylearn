import './home.css';
import React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid'



export default function Home(){
    return (
        <div className="home">
         
            <Grid container  spacing={0} rowSpacing={12}>
            <Grid item xs={12} textAlign='center'>
    <h className="title">Python 101</h>
  </Grid>
  <Grid item sm={6} textAlign='right' >
    <div className="learn-btn">
    <Button variant="contained" >
            
            <Link className="learn" to="/learn"> Learn </Link>
    </Button>
    </div>
  </Grid>
  <Grid item sm={6} textAlign="left">
    <div className="debug-btn">
  <Button variant="contained" >
    <Link className="debug" to="/debug"> Debug </Link>
    </Button>
    </div>
  </Grid>
            
            
    
    </Grid>
        
        </div>
      );
}
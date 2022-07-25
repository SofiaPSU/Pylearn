import React from 'react';
import './namingVariables.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyGrid = styled('Grid')({
    paddingLeft:150,
    paddingTop: 96,
   
    
});


export default function namingVariables(){
    return ( 
            <div>
                <p> Naming Variables in Python</p>

            <Grid container spacing={12} wrap="nowrap" className='center'>
                <MyGrid item xs={6} align="left">
            <p>1. Variable names must start with a letter of underscore.</p>
            <p>2. Variable names cannot start with a number or special character.</p>
            <p>3. Variable names can only contain alphanumeric values and underscores.</p>
            </MyGrid>
            <Grid item xs={6} paddingRight={10}>
            <iframe src="https://trinket.io/embed/python/b08da7c17c" width="500" height="500" align = "center" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </Grid>
            
            </Grid>
            <Button variant="contained" >
            <Link className="next" to="/equalsSign"> Next </Link>
            </Button>
            <br></br>
            <br></br>
            </div>   
    );
}
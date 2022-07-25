import React from 'react';
import './variableDef.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyGrid = styled('Grid')({
    paddingLeft:150,
    paddingTop: 96,
   
    
});


export default function variableDef(){
    return ( 
            <div>
                <p> Variable Definition in Python</p>

            <Grid container spacing={12} wrap="nowrap" className='center'>
                <MyGrid item xs={6} align ="left">
            <p>Variables can be changed in the same code.</p>
            <p>1. In Python, variables aren't assigned a specific value but the values hold set positions.</p>
            <p>2. The variables point to the values and those pointers can change.</p>
            
            </MyGrid>
            <Grid item xs={6} paddingRight={10}>
            <div>
            <iframe src="https://trinket.io/embed/python/52d50534b8" width="500" height="500" align = "center" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </Grid>

            
            </Grid>
            <Button variant="contained" >
            <Link className="next" to="/namingVariables"> Next </Link>
            </Button>
            <br></br>
            <br></br>
            </div>   
    );
}
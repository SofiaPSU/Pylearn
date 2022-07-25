import React from 'react';
import './HelloWorld.css';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyGrid = styled('Grid')({
    paddingLeft:150,
    paddingTop: 96,
    
    
});

export default function HelloWorld(){
    return ( 
            <div>
                <p> Printing in Python</p>
            <Grid container spacing={12} wrap="nowrap" className='center'>
                 <MyGrid item xs={6} zeroMinWidth align="left">
                
            <p>To output or print text in python, use the given formats:  
            </p>
            <p>
                1. print(var) for a variable var
            </p>
            <p>
                2. print("abc") to print out a string with the value "abc"
            </p>
            
            </MyGrid>
            <Grid item xs={6} paddingRight={10} >
            <div>
            <iframe src="https://trinket.io/embed/python/b6f3e072ed" width="500" height="500" align = "center" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </Grid>
            </Grid>

            <Button variant="contained">
            
            <Link className="next" to="/commenting"> Next </Link>
            </Button>
            
            </div>   
    );
}

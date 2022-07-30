import React from 'react';
import './ifElseStatements.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyGrid = styled('Grid')({
    paddingLeft: 150,
    paddingTop: 96,


});


export default function ifElseStatements(){
    return ( 
            <div>
                <p> If/Else Statements </p>
                <Grid container spacing={12} wrap="nowrap" className='center'>
                <MyGrid item xs={6} align="left"  >
           
            <p>1. If/Else statements are conditional statements that allow you to run certain lines of code only when a condition is met.</p>
            <p>2. If offers a condition to satisfy while Else offers something to run onyl if the If condition is not met.</p>
            <p>3. You can include multiple if statments by using elif.</p>
            <p>4. You can use "and" and "or" statements to offer multiple conditions for an if statment.</p>
            </MyGrid>
                <Grid item xs={6} paddingRight={10} >
            <iframe src="https://trinket.io/embed/python/c4d77ec7ca" width="500" height="500" align = "center" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </Grid>
            </Grid>

            <Button variant="contained">
            
            <Link className="next" to="/debug"> Next </Link>
            </Button>
            <br></br>
            <br></br>
            </div>   
    );
}
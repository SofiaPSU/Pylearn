import React from 'react';
import './whileLoops.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyGrid = styled('Grid')({
    paddingLeft: 150,
    paddingTop: 96,


});


export default function whileLoops() {
    return (
        <div>
            <p> While Loops in Python</p>
            <Grid container spacing={12} wrap="nowrap" className='center'>
                <MyGrid item xs={6} align="left"  >

                    <p>While statements are another way to create loops in python.</p>
                    <p>1. A while loop begins with while followed by a condition and then a colon. The text below the colon that is indented will run until the condition is no longer met.</p>
                    <p>2. An infinite loop occurs when the while loop condition is always met, and it will therefore run infinitely.</p>
                </MyGrid>
                <Grid item xs={6} paddingRight={10} >
                    <iframe src="https://trinket.io/embed/python/5329afea1b" width="500" height="500" align="center" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
                        title="print"></iframe>
                </Grid>
            </Grid>

            <Button variant="contained" >
                <Link className="next" to="/debug"> Debug </Link>
            </Button>

        </div>
    );
}
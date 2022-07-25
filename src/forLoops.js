import React from 'react';
import './forLoops.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyGrid = styled('Grid')({
    paddingLeft: 150,
    paddingTop: 96,


});


export default function forLoops() {
    return (
        <div>
            <p> For Loops </p>
            <Grid container spacing={12} wrap="nowrap" className='center'>
                <MyGrid item xs={6} align="left"  >
                    <p>A for loop repeats a fixed number of times or iterates over a sequence like a list or tuple.</p>
                    <p>1. It is denoted by - for var in sequence:</p>
                    <p>2. It is important to indent the code that you want to repeat under the for loop</p>
                    <p>3. A way to loop over the index values of a sequence is by using a range method.</p>
                    <p>4. Range works like - for var in range(start,stop,step):</p>
                    <p>5. The values of var would be from <i>start</i> to <i>stop-1</i> skipping over <i>step</i> number of values.</p>

                </MyGrid>
                <Grid item xs={6} paddingRight={10} >

                    <iframe src="https://trinket.io/embed/python/639d34ddf7" width="500" height="500" align="center" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
                        title="print"></iframe>
                </Grid>
            </Grid>

            <Button variant="contained" >
                <Link className="next" to="/whileLoops"> Next </Link>
            </Button>
            <br></br>
            <br></br>
        </div>
    );
}
import React from 'react';
import './commenting.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyGrid = styled('Grid')({
    paddingLeft: 150,
    paddingTop: 96,


});


export default function commenting() {
    return (
        <div>
            <p> Commenting </p>

            <Grid container spacing={12} wrap="nowrap" className='center'>
                <MyGrid item xs={6} align="left"  >

                    <p>Commenting in python allows you to add notes to your code that don't actually run when you run the code.</p>
                    <p>1. To comment out a single line of code, use #.</p>
                    <p>2. Triple quotes ''' can be used to comment out multiple lines by putting them around the section you want to comment out.</p>

                </MyGrid>
                <Grid item xs={6} paddingRight={10} >

                    <iframe src="https://trinket.io/embed/python/b94873c5f8" width="500" height="500" align="center" frameborder="0" marginwidth="0" marginheight="0" allowFullScreen
                        title="print"></iframe>

                </Grid>
            </Grid>

            <Button variant="contained" >
                <Link className="next" to="/variableDef"> Next </Link>

            </Button>
            <br></br>
        </div>
    );
}
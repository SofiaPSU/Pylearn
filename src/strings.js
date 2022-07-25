import React from 'react';
import './strings.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyGrid = styled('Grid')({
    paddingLeft: 150,
    paddingTop: 96,


});


export default function strings() {
    return (
        <div>
            <p> Strings </p>
            <Grid container spacing={12} wrap="nowrap" className='center'>
                <MyGrid item xs={6} align="left"  >

                    <p>1. Strings can contain alphanumerical characters as well as special characters.</p>
                    <p>2. Python uses ' ', " ", and ''' ''' to represent string literals.</p>
                </MyGrid>
                <Grid item xs={6} paddingRight={10} >
                    <iframe src="https://trinket.io/embed/python/51162e759d" width="500" height="500" align="center" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
                        title="print"></iframe>

                </Grid>
            </Grid>

            <Button variant="contained" >
                <Link className="next" to="/tuples"> Next </Link>
            </Button>
            <br></br>
            <br></br>

        </div>
    );
}
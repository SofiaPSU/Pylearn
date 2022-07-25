import React from 'react';
import './equalsSign.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyGrid = styled('Grid')({
    paddingLeft: 150,
    paddingTop: 96,


});



export default function equalsSign() {
    return (
        <div>
            <p> The Equals Sign </p>
            <Grid container spacing={12} wrap="nowrap" className='center'>
                <MyGrid item xs={6} align="left"  >

                    <p> In Python, there is a very important difference between "=" and "==".</p>
                    <p>1. "=" is an assignment operator and assigns values to variables.</p>
                    <p>2. "==" is a symbol that indicates equality between two variables.</p>
                </MyGrid>
                <Grid item xs={6} paddingRight={10}>
                    <iframe src="https://trinket.io/embed/python/6a3884f3a8" width="500" height="500" align="center" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
                        title="print"></iframe>
                </Grid>
            </Grid>

            <Button variant="contained" >
                <Link className="next" to="/caseSensitivity"> Next </Link>
            </Button>
            <br></br>
            <br></br>
        </div>
    );
}
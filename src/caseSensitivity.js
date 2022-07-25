import React from 'react';
import './caseSensitivity.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyGrid = styled('Grid')({
    paddingLeft: 150,
    paddingTop: 96,


});


export default function caseSensitivity() {
    return (
        <div>
            <p> Case Sensitivity </p>
            <Grid container spacing={12} wrap="nowrap" className='center'>
                <MyGrid item xs={6} align="left"  >
                    <p>1. Python is case sensitive.</p>
                    <p>2. Ex: var and Var are not the same variable because one starts with uppercase and the other lowercase.</p>
                </MyGrid>
                <Grid item xs={6} paddingRight={10} >
                    <iframe src="https://trinket.io/embed/python/f6303dcd03" width="500" height="500" align="center" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
                        title="print"></iframe>
                </Grid>
            </Grid>
            <Button variant="contained" >
                <Link className="next" to="/strings"> Next </Link>
            </Button>

        </div>
    );
}
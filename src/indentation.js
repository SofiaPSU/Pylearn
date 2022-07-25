import React from 'react';
import './indentation.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { styled } from '@mui/system';

const MyGrid = styled('Grid')({
    paddingLeft: 150,
    paddingTop: 96,


});


export default function indentation() {
    return (
        <div>
            <p> Indentation Sensitivity </p>
            <Grid container spacing={12} wrap="nowrap" className='center'>
                <MyGrid item xs={6} align="left"  >

                    <p>Python relies on indentation to create blocks of code.</p>
                    <p>1. These blocks of code are usually under an if else statement, loops or functions, which we'll see next.</p>
                    <p>2. It is usually implemented by using the tab key but can use any other amount of spaces as long as it is consistant and more than one space.</p>
                
                </MyGrid>
                <Grid item xs={6} paddingRight={10} >

                    <iframe src="https://trinket.io/embed/python/778acf7951" width="500" height="500" align="center" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
                        title="print"></iframe>
                </Grid>
            </Grid>
            <Button variant="contained">

                <Link className="next" to="/ifElseStatements"> Next </Link>
            </Button>
        </div>
    );
}
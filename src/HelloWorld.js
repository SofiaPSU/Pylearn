import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';


export default function HelloWorld(){
    return ( 
            <div className="print">
                <Grid container spacing={1} >
                    <Grid item xs={6} textAlign='left' className="how">
                        <p> Printing in Python</p>
                        <p className="how">
                            To output/print text in python use the format print(var) or print(“string”) to print out a variable or string.
                            </p>
                    </Grid>
                    <Grid item xs={6}>
            <iframe src="https://trinket.io/embed/python/8b4bfb5a41" width="600" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>  
            </Grid>
            </Grid> 
            <Button variant="contained" >
                <Link className="next" to="/next"> Continue </Link>
            </Button>
            </div>   
    );
}

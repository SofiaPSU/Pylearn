import React from 'react';
import './frameTwentyThree.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function frameTwentyThree(){
    return ( 
            <div>
                <br></br>
                <p>Debugging Practice #6</p>

            <center>
            <iframe src="https://trinket.io/embed/python/080e24a94d" width="500" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe> 
            <br></br>
            <p>W E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A R E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; __ __ __</p>
            </center>
            

            <Button variant="contained" >
            <Link className="next" to="/frameTwentyFour"> Continue </Link>
            </Button>
            <br></br>
            <br></br>
            </div>
    
    );
}
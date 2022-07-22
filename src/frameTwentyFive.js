import React from 'react';
import './frameTwentyFive.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function frameTwentyFive(){
    return ( 
            <div>
                <br></br>
                <p>Debugging Practice #8</p>

            <center>
            <iframe src="https://trinket.io/embed/python/00d41525f3" width="500" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe> 
            <br></br>
            <p>W E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A R E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P S __</p>
            </center>
            

            <Button variant="contained" >
            <Link className="next" to="/home"> Continue </Link>
            </Button>
            <br></br>
            <br></br>
            </div>
    
    );
}
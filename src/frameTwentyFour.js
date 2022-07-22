import React from 'react';
import './frameTwentyFour.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function frameTwentyFour(){
    return ( 
            <div>
                <br></br>
                <p>Debugging Practice #7</p>

            <center>
            <iframe src="https://trinket.io/embed/python/56fe060f93" width="500" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe> 
            <br></br>
            <p>W E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A R E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; __ __ __</p>
            </center>
            

            <Button variant="contained" >
            <Link className="next" to="/frameTwentyFive"> Continue </Link>
            </Button>
            <br></br>
            <br></br>
            </div>
    
    );
}
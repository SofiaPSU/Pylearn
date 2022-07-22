import React from 'react';
import './frameTwenty.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function frameSeven(){
    return ( 
            <div>
                <br></br>
                <p>Debugging Practice #3</p>

            <center>
            <iframe src="https://trinket.io/embed/python/0f404c7d3d" width="500" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe> 
            <br></br>
            <p>WE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__ __ __ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; __ __ __</p>
            </center>
            

            <Button variant="contained" >
            <Link className="next" to="/HelloWorld"> Continue </Link>
            </Button>
            <br></br>
            <br></br>
            </div>
    
    );
}
import React from 'react';
import './frameSeven.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function frameSeven(){
    return ( 
            <div>
                <br></br>
                <p>Debugging Practice #1</p>

            <center>
            <iframe src="https://trinket.io/embed/python/969b166814" width="500" height="500" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe> 
            <p>__ __    __ __ __    __ __ __</p>
            </center>
            

            <Button variant="contained" >
            <Link className="next" to="/HelloWorld"> Continue </Link>
            </Button>
            <br></br>
            <br></br>
            </div>
    
    );
}
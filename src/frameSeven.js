import React from 'react';
import './frameSeven.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function frameSeven(){
    return ( 
            <div>
                

            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>__ __    __ __ __    __ __ __</p>
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/969b166814" width="500" height="500" align = "right" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>

            <Button variant="contained" >
            <Link className="next" to="/HelloWorld"> Continue </Link>
            </Button>
    
            </div>   
    );
}
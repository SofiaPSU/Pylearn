import React from 'react';
import './strings.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 



export default function strings(){
    return ( 
            <div>
                <p> Strings in Python</p>

            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>1. Strings can contain alphanumerical characters as well as special characters.</p>
            <p>2. Python uses ' ', " ", and ''' ''' to represent string literals.</p>
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/51162e759d" width="500" height="500" align = "right" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>

            <Button variant="contained" >
            <Link className="next" to="/variableDef"> Next </Link>
            </Button>
            <br></br>
            <br></br>
    
            </div>   
    );
}
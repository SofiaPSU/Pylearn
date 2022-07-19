import React from 'react';
import './commenting.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function commenting(){
    return ( 
            <div>
                <p> Commenting in Python</p>

            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>1. Commenting in python allows you to add notes to your code that don't actually run when you run the code.</p>
            <p>2. To comment out a single line of code, use "#".</p>
            <p>3. Triple quotes can be used to comment out multiple lines by putting them around the section you want to comment out.</p>
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/b94873c5f8" width="500" height="500" align = "right" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>

            <Button variant="contained" >
            <Link className="next" to="/tuples"> Next </Link>
      
            </Button>
    
            </div>   
    );
}
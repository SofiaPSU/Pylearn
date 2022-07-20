import React from 'react';
import './whileLoops.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function whileLoops(){
    return ( 
            <div>
                <p> While Loops in Python</p>

            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>1. While statements are another way to create loops in python.</p>
            <p>2. A while loop begins with while followed by a condition and then a colon. The text below the colon that is indented will run until the condition is no longer met.</p>
            <p>3. An infinite loop occurs when the while loop condition is always met, and it will therefore run infinitely.</p>
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/5329afea1b" width="500" height="500" align = "right" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>

            <Button variant="contained" >
            <Link className="next" to="/indentation"> Next </Link>
            </Button>
    
            </div>   
    );
}
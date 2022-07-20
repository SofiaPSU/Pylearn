import React from 'react';
import './indentation.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 



export default function indentation(){
    return ( 
            <div>
                <p> Indentation Sensitivity in Python</p>

            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>Python relies on indentation to create blocks of code.</p>
            <p>These blocks of code are usually under an if else statement, loops or functions.</p>
            <p>It is usually implemented by using the tab key but can use any other amount of spaces as long as it is consistant and more than one space.</p>
            
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/778acf7951" width="500" height="500" align = "right" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>
            <Button variant="contained">
            
            <Link className="next" to="/debug"> Debug </Link>
            </Button>
            </div>   
    );
}
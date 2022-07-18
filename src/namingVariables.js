import React from 'react';
import './namingVariables.css';
import Button from '@mui/material/Button';



export default function namingVariables(){
    return ( 
            <div>
                <p> Naming Variables in Python</p>

            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>1. Variable names must start with a letter of underscore.</p>
            <p>2. Variable names cannot start with a number or special character.</p>
            <p>3. Variable names can only contain alphanumeric values and underscores.</p>
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/b08da7c17c" width="500" height="500" align = "right" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>

            <Button variant="contained" href="indentation.js">
            Next
            </Button>
    
            </div>   
    );
}
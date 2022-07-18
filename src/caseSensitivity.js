import React from 'react';
import './namingVariables.css';
import Button from '@mui/material/Button';



export default function caseSensitivity(){
    return ( 
            <div>
                <p> Case Case Sensitivity in Python</p>

            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>1. Python is case sensitive.</p>
            <p>2. Ex: var and Var are not the same variable because one starts with uppercase and the other lowercase.</p>
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/f6303dcd03" width="500" height="500" align = "right" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>

            <Button variant="contained" href="namingVariables.js">
            Next
            </Button>
    
            </div>   
    );
}
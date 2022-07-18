import React from 'react';
import './ifElseStatements.css';
import Button from '@mui/material/Button';



export default function ifElseStatements(){
    return ( 
            <div>
                <p> If/Else Statements in Python</p>

            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>1. If/Else statements are conditional statements that allow you to run certain lines of code only when a condition is met.</p>
            <p>2. If offers a condition to satisfy while Else offers something to run onyl if the If condition is not met.</p>
            <p>3. You can include multiple if statments by using elif.</p>
            <p>4. You can use "and" and "or" statements to offer multiple conditions for an if statment.</p>
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/c4d77ec7ca" width="500" height="500" align = "right" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>

            <Button variant="contained" href="forLoops.js"> 
            Next
            </Button>
    
            </div>   
    );
}
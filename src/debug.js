import React from 'react';
import './debug.css';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';


export default function debug(){
    return ( 
            <div>
                <p> Debugging Tips</p>
                <br></br>
            <div id = "tips" align = "left">
            <p>1. Take a break from your code and clear your mind before you come back to it.</p>
            <p>2. Don’t be afraid to ask someone for help (office hours are a great resource!) </p>
            <p>3. Explain your code to someone else or talk through it. </p>
            <p>4. Draw out your code.</p>
            <p>5. Go line by line and check the actual function of each line. </p>
            <p>6. Look for syntax errors and check the terminal explanation. </p>
            <p>7. Using print and variables in between your code to check until where it works correctly. </p>
            <p>8. Check your variable names and assignment operators. </p>
            </div>

<br></br>
            <Button variant="contained">
            
            <Link className="next" to="/frameSeven"> Continue </Link>
            </Button>
            
            </div>   
    );
}

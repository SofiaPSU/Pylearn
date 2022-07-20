import React from 'react';
import './forLoops.css';
import Button from '@mui/material/Button';



export default function forLoops(){
    return ( 
            <div>
                <p> For Loops in Python</p>

            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>A for loop repeats a fixed number of times or iterates over a sequence like a list or tuple.</p>
            <p>It is denoted by - for var in sequence:</p>
            <p>It is important to indent the code that you want to repeat under the for loop</p>
            <p>A way to loop over the index values of a sequence is by using a range method.</p>
            <p>Range works like - for var in range(start,stop,step):</p>
            <p>The values of var would be from <i>start</i> to <i>stop-1</i> skipping over <i>step</i> number of values.</p>
            
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/639d34ddf7" width="500" height="500" align = "right" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>
            </div>   
    );
}
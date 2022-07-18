import React from 'react';
import './tuples.css';
import Button from '@mui/material/Button';



export default function tuples(){
    return ( 
            <div>
                <p> Tuples, Lists, and Dictionaries in Python</p>

            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>These data types can be defined using different brackets.</p>
            <p>1. Tuples - (1,2,3)</p>
            <p>2. Lists - [1,2,3]</p>
            <p>3. Dictionaries - &lbrace1:'a',2:'b',3:'c'&rbrace</p>
            <p>Both tuples and lists can be referenced by index values.</p>
            <p>Dictionaries are unordered and referenced by their keys.</p>
            
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/6567132ed7" width="500" height="500" align = "right" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>
            <Button variant="contained" href="variableDef.js">
            Next
            </Button>
            </div>   
    );
}
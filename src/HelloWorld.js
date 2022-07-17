import React from 'react';
import './HelloWorld.css';
import Button from '@mui/material/Button';



export default function HelloWorld(){
    return ( 
            <div>
                <p> Printing in Python</p>
            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>To output or print text in python, use the given formats:  
            </p>
            <p>
                1. print(var) for a variable var
            </p>
            <p>
                2. print("abc") to print out a string with the value "abc"
            </p>
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/b6f3e072ed" width="500" height="500" align = "center" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>
            </div>   
    );
}
import React from 'react';
import './equalsSign.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; 




export default function equalsSign(){
    return ( 
            <div>
                <p> The Equals Sign in Python</p>

            <div class = "grid-container">
            <div id = "col1" align = "left">
            <p>1. In Python, there is a very important difference between "=" and "==".</p>
            <p>2. "=" is an assignment operator and assigns values to variables.</p>
            <p>3. "==" is a symbol that indicates equality between to variables.</p>
            </div>
            <div>
            <iframe src="https://trinket.io/embed/python/3e44b19127" width="500" height="500" align = "right" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen
            title="print"></iframe>   
            </div>
            </div>

            <Button variant="contained" >
            <Link className="next" to="/caseSensitivity"> Next </Link>
            </Button>
            <br></br>
            <br></br>
            </div>   
    );
}
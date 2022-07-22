import React from 'react';
import './finalDebug.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



export default function finalDebug(){
    return ( 
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>Congratulations!</p>
                <p>You debugged all the files!</p>
            <center>
            <br></br>
            
            <p>W E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A R E &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; P S U !!</p>
            </center>
            

            <Button variant="contained" >
            <Link className="next" to="/"> Continue </Link>
            </Button>
            <br></br>
            <br></br>
            </div>
    
    );
}
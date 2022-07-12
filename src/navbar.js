import './navbar.css';
import React from 'react';
import {Link} from 'react-router-dom';


export default function Navbar(){
    return(
        <div className="navbar">
     <div className="position">
            <Link className="wepo-title" to="/">
                WEPO '22
            </Link>
            </div>
        </div>
    )
}
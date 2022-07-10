import './navbar.css';
import React from 'react';
import Container from "@mui/material/Container";
import {Link} from 'react-router-dom';


export default function Navbar(){
    return(
        <Container >
            <Link className="wepo-title" to="/">
                WEPO '22
            </Link>
        </Container>
    )
}
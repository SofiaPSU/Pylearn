import './home.css';
import React from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';




export default function Home(){
    return (
        <div className="home">
          <header className="home-header">
            
            <Button variant="contained">
            
            <Link className="learn" to="/learn"> Learn </Link>
    </Button>
    <Button variant="contained">
    <Link className="debug" to="/debug"> Debug </Link>
    </Button>
          </header>
        </div>
      );
}
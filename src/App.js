import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";
import HelloWorld from "./HelloWorld";
//import Debug from "./debug";


function App() {
  return (
<div className="App">
  <BrowserRouter>
  <Navbar className="nav"/>
  <div className="App-header">
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/learn" element={<HelloWorld/>}/>
     
    </Routes>
 
  </div>
  </BrowserRouter>
</div>
  );
}

export default App;

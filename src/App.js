import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";
import HelloWorld from "./HelloWorld";
import Commenting from "./commenting";
//import namingVariables from "./namingVariable";
//import Debug from "./debug";


function App() {
  return (
<div className="App">
  <BrowserRouter>
  
  <div className="App-header">
    <div className="align">
  <Navbar className="nav"/>
  </div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/learn" element={<HelloWorld/>}/>
      <Route path="/commenting" element={<Commenting/>}/>
    </Routes>
  </div>
  </BrowserRouter>
</div>
  );
}

export default App;

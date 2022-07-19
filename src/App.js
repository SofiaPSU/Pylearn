import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";
import HelloWorld from "./HelloWorld";
import Commenting from "./commenting";
import NamingVariables from "./caseSensitivity";
import Debug from "./debug";
import Tuples from "./tuples";
import VariableDef from "./variableDef";


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
      <Route path="/namingVariables" element={<NamingVariables/>}/>
      <Route path="/debug" element = {<Debug />}/>
      <Route path="/tuples" element = {<Tuples/>}/>
      <Route path="/variableDef" element = {<VariableDef/>}/>
    </Routes>
  </div>
  </BrowserRouter>
</div>
  );
}

export default App;

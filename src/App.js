import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";
import HelloWorld from "./HelloWorld";
import Commenting from "./commenting";
import CaseSensitivity from "./caseSensitivity";
import NamingVariables from "./namingVariables";
import Debug from "./debug";
import Tuples from "./tuples";
import VariableDef from "./variableDef";
import Indentation from "./indentation";
import IfElseStatements from "./ifElseStatements";
import ForLoops from "./forLoops";
import WhileLoops from "./whileLoops";
import EqualsSign from "./equalsSign";
import Strings from "./strings";
import FrameSeven from "./frameSeven";
import FrameTwenty from "./frameTwenty";

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
      <Route path="/indentation" element = {<Indentation/>}/>
      <Route path="/ifElseStatements" element = {<IfElseStatements/>}/>
      <Route path="/forLoops" element = {<ForLoops/>}/>
      <Route path="/caseSensitivity" element = {<CaseSensitivity/>}/>
      <Route path="/whileLoops" element = {<WhileLoops/>}/>
      <Route path="/equalsSign" element = {<EqualsSign/>}/>
      <Route path="/strings" element = {<Strings/>}/>
      <Route path="/frameSeven" element = {<FrameSeven/>}/>
      <Route path="/frameTwenty" element = {<FrameSeven/>}/>
    </Routes>
  </div>
  </BrowserRouter>
</div>
  );
}

export default App;

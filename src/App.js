import './App.css';
import React, { useEffect } from 'react';
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
import FrameNineteen from "./frameNineteen";
import FrameTwenty from "./frameTwenty";
import FrameTwentyOne from "./frameTwentyOne";
import FrameTwentyTwo from "./frameTwentyTwo";
import FrameTwentyThree from "./frameTwentyThree";
import FrameTwentyFour from "./frameTwentyFour";
import FrameTwentyFive from "./frameTwentyFive";
import FinalDebug from "./finalDebug";
import About from "./about"

function App() {

  useEffect(() => {
    document.title="Python 101"
   
  })
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
      <Route path="/frameNineteen" element = {<FrameNineteen/>}/>
      <Route path="/frameTwenty" element = {<FrameTwenty/>}/>
      <Route path="/frameTwentyOne" element = {<FrameTwentyOne/>}/>
      <Route path="/frameTwentyTwo" element = {<FrameTwentyTwo/>}/>
      <Route path="/frameTwentyThree" element = {<FrameTwentyThree/>}/>
      <Route path="/frameTwentyFour" element = {<FrameTwentyFour/>}/>
      <Route path="/frameTwentyFive" element = {<FrameTwentyFive/>}/>
      <Route path="/finalDebug" element = {<FinalDebug/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </div>
  </BrowserRouter>
</div>
  );
}

export default App;

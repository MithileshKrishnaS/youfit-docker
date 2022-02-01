import './App.css';
import Home from './components/Home';
import Each from './components/Each';
import {BrowserRouter, Route}from 'react-router-dom';
import { Routes } from 'react-router';
import { useState } from 'react';
import logo from './logo/logo.jpg';
import logo1 from './logo/logo1.jpg'

var a='wkfn'
function App() {

  const[index,setIndex]=useState();

  const handleIndex=(data)=>
  {
    setIndex(data)
  }

  return (
    <div className="App">
      <div className="nav">
        {/* <img src={logo1}></img> */}
        <i class="fas fa-dumbbell fa-4x"></i>
        <span>Youfit</span>
      </div>     
       <BrowserRouter>
          <Routes>
            <Route path="/" exact  element={<Home data={handleIndex}></Home>}></Route>
            <Route path="/each/:id" exact element={<Each data={index}></Each>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react'

import './App.css';
import Navbar from './Component/Navbar';
import Intro from "./Component/Intro"
import About from "./Component/About"
import Skill from "./Component/Skill"
import Qualification from "./Component/Qualification"
import Project from "./Component/Project"
import Contact from "./Component/Contact"
import Footer from "./Component/Footer"


function App() {
  return (
    <div className="App">

      
      <Navbar/>
      <Intro/> 
    <About/> 
       <Skill/>
     <Qualification/>
    <Project/>
      <Contact/>
     <Footer/>

    </div>
  );
}

export default App;

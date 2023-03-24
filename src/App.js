import React from 'react'

import './App.css';

import Nav from "../src/container/nav"
import Int from './container/Int';
import Skills from './container/sk';
import Abt from './container/Abt';
import Qulifica from './container/Qulifica';
import PJT from './container/PJT';
import Cont from './container/Cont';
import Fot from './container/Fot';
import Cirtificate from './container/cirtificate';



function App() {
  return (
    <div >

      <Nav />
      <Int />
      <Abt />
      <Skills />
      <Qulifica />
      <Cirtificate/>
      <PJT />
      <Cont />
      <Fot />
  </div>
  );
}

export default App;

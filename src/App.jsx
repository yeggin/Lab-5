import { useState } from 'react'
import Header from './components/Header'
import Highlights from "./components/Highlights"
import LatestEvents from "./components/Events"
import Foot from './components/Foot'

const name = 'Jo';

function App() {

  return (
    <div>
      <Header name={name}/>
      <Highlights />
      <LatestEvents />
      <Foot />
    </div> 
  );
};

export default App

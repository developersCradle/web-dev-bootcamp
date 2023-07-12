import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter'
import Die from './Die'
import DoubleDice from './DoubleDice'
import ColorList from './ColorList'


function App() {

  return (
    <div>
      {/* <Greeter person="Bill" from="Colt 2"/>
      <Greeter person="Jacky" from="Colt"/>

      <Die numSides={20} />
      <Die />
      <Die numSides={19} /> */}


      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/>


      <ColorList colors={["red", "pink", "purple", "teal"]}/>

    </div>
  )
}

export default App

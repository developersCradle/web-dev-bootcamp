import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter'
import Die from './Die'

function App() {

  return (
    <div>
      <Greeter person="Bill" from="Colt 2"/>
      <Greeter person="Jacky" from="Colt"/>

      <Die numSides={20} />
      <Die />
      <Die numSides={19} />

    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRef from './components/UseRef'
import Interval from './components/Interval'
import StopWatch from './components/StopWatch'
import Carousel from './components/Carousel'
import Modal from './components/Modal'
import useVisibility from './hooks/useVisibility'

function App() {
/**
 * useRef is used to access the DOM element directly
 * it is used for persiting the value across renders without causing re-render
 * how it works
 * 1. create a reference using useRef( initialValue)
 * 2. returns a mutable object
 * 3. we can access the current property of the object to get the value
 * 4. persist the value across renders
 */
const {isVisible, show, hide, toggle} = useVisibility(false)

  return (
    <>
    {/* <UseRef /> */}
    {/* <Interval/> */}
    {/* <StopWatch/> */}
    {/* <Carousel/> */}
    <button onClick={toggle}>Toggle Modal</button>
    <button onClick={show}>Show Modal</button>
    <Modal isVisible={isVisible} hide={hide}/>
     
    </>
  )
}

export default App

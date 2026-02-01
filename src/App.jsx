import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeartAnimation from '../component/HeartAnimation'
import Timer from '../component/timer'
import Note from "../component/Note"
import News_Modal from '../component/News_Modal'

import './App.css'

function App() {
  
  return (
    <>
     <Timer></Timer>
     <Note></Note>
     <News_Modal />
    </>
  )
}

export default App

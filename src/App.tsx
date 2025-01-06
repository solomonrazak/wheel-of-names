import { useState } from 'react'
import Header from './components/header'
import Question from './features/question'
import Participants from './features/participants'


function App() {
 

  return (
    <div className="bg-black h-screen">
      <Header />
      <Question />
      <Participants />
    </div>
  )
}

export default App

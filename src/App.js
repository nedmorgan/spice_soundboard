import React from 'react'
import './App.css'
import Header from './components/Header'
import Positive from './components/Positive'
import Negative from './components/Negative'

function App() {
  return (
    <div className="App">
      <Header />
      <Positive />
      <Negative />
    </div>
  )
}

export default App
